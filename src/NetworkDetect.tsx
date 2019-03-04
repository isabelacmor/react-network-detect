import * as React from 'react';
import './NetworkDetect.css';

interface INetworkDetectProps {
  loadingAnimation?: JSX.Element;
}

interface INetworkDetectState {
  isOffline: boolean;
}

class NetworkDetect extends React.Component<INetworkDetectProps, INetworkDetectState> {

  constructor(props: INetworkDetectProps) {
    super(props);

    this.state = {
      isOffline: !navigator.onLine
    }
  }

  public componentDidMount(): void {
      window.addEventListener("offline", this.updateNetworkState);
      window.addEventListener("online", this.updateNetworkState);
  }

  public componentWillUnmount(): void {
      window.removeEventListener("offline", this.updateNetworkState);
      window.addEventListener("online", this.updateNetworkState);
  }

  public render() {
    return (
      this.state.isOffline ? <span>offline</span> : <span>online</span>
    );
  }

  private updateNetworkState = (event: Event): void => {
    if(event.type === "offline") {
      this.setState({ isOffline: true });
    } else if (event.type === "online") {
      this.setState({ isOffline: false });
    }
  }
}

export default NetworkDetect;
