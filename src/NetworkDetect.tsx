import * as React from 'react';

import loadingSvg from './NetworkDetect.svg';
import { styles } from './NetworkDetectStyles';

interface INetworkDetectProps {
  loadingAnimation?: JSX.Element;
}

interface INetworkDetectState {
  isOffline: boolean;
}

class NetworkDetect extends React.Component<INetworkDetectProps, INetworkDetectState> {
  private static loadingAnimation = 
    <div style={styles.loadingContainer}> <img src={loadingSvg}/></div>;

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
      this.state.isOffline ? this.getLoadingAnimation() : this.props.children
    );
  }

  private getLoadingAnimation = (): JSX.Element => {
    return this.props.loadingAnimation !== undefined ? this.props.loadingAnimation : NetworkDetect.loadingAnimation;
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
