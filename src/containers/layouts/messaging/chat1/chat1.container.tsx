import React from 'react';
import {
  NavigationScreenProps,
  NavigationScreenConfig, NavigationActions,
} from 'react-navigation';
import {
  ChatHeader,
  ChatHeaderNavigationStateParams,
} from '@src/components/messaging';
import {
  Conversation,
  Message,
  Profile,
} from '@src/core/model';
import { conversation5 } from '@src/core/data/conversation';
import {
  profile1,
  profile2,
} from '@src/core/data/profile';
import { Chat1 } from './chat1.component';
import SendBirdAdapter from '@src/core/dataService/sendBirdAdapter.js';

interface State {
  newMessageText: string;
  conversation: Conversation;
}

export class Chat1Container extends React.Component<NavigationScreenProps, State> {
  private appId = '9DA1B1F4-0BE6-4DA8-82C5-2E81DAB56F23';
  private channelUrl = 'sendbird_open_channel_1_5b0336cc55abf6d3464e1d2a263a8e343d3b2b42'; 

  private adapter = null;

  private enterChannel(channelUrl, callback?) {
    let _this = this;
    _this.adapter.enterChannel(channelUrl, () => {
      _this.adapter.getMessageList((messageList) => {
        console.log(messageList);

        _this.adapter.createHandler((channel, message) => {
          if (channel.url === channelUrl) {
          }
        });
      }, true);

      if(callback) {
        callback();
      }
    });
  }

  private connectSendBird(){
    this.adapter.connect('userIdAndy', 'nickNameAndy',
    () => {
      this.adapter.connectionHandler(this.channelUrl, this);
      this.enterChannel(this.channelUrl);
    });
  }

  public state: State = {
    newMessageText: '',
    conversation: conversation5,
  };

  static navigationOptions: NavigationScreenConfig<any> = ({ navigation, screenProps }) => {
    const headerProps: ChatHeaderNavigationStateParams = {
      interlocutor: navigation.getParam('interlocutor', conversation5.interlocutor),
      lastSeen: navigation.getParam('lastSeen', 'today'),
      onBack: navigation.getParam('onBack'),
      onProfile: navigation.getParam('onProfile'),
    };

    const header = (navigationProps: NavigationScreenProps) => {
      return (
        <ChatHeader
          {...navigationProps}
          {...headerProps}
        />
      );
    };

    return { ...navigation, ...screenProps, header };
  };

  public componentWillMount(): void {
    this.adapter = new SendBirdAdapter(this.appId);
    this.connectSendBird();
    this.props.navigation.setParams({
      interlocutor: this.state.conversation.interlocutor,
      lastSeen: this.state.conversation.lastSeen,
      onBack: this.onBackPress,
      onProfile: this.onProfilePress,
    });
  }

  private onProfilePress = (profile: Profile): void => {
    this.props.navigation.navigate('Test Profile');
  };

  private onNewMessageChange = (newMessageText: string): void => {
    this.setState({ newMessageText });
  };

  private onMessageAddPress = (): void => {
    const profiles: Profile[] = [profile1, profile2];
    const newMessage: Message = {
      author: profiles[Math.floor(Math.random() * profiles.length)],
      text: this.state.newMessageText,
      date: '15:01 PM',
      read: false,
      delivered: false,
    };
    const conversationCopy: Conversation = this.state.conversation;
    conversationCopy.messages.push(newMessage);
    this.setState({
      conversation: conversationCopy,
      newMessageText: '',
    });
  };

  private onBackPress = (): void => {
    this.props.navigation.goBack(null);
  };

  public render(): React.ReactNode {
    return (
      <Chat1
        conversation={this.state.conversation}
        newMessage={this.state.newMessageText}
        onNewMessageChange={this.onNewMessageChange}
        onMessageAdd={this.onMessageAddPress}
      />
    );
  }
}
