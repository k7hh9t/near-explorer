import React from "react";

import NodesApi, * as N from "../../libraries/explorer-wamp/nodes";

import NodeRow from "./NodeRow";
import PaginationSpinner from "../utils/PaginationSpinner";

interface State {
  onlineNodes?: N.NodeInfo[];
}
export default class extends React.Component<State> {
  state: State = {};

  getNodes = async () => {
    let onlineNodes = await new NodesApi().getOnlineNodes();
    this.setState({ onlineNodes });
  };

  componentDidMount() {
    this.getNodes();
  }

  render() {
    const { onlineNodes } = this.state;
    let nodes;
    if (onlineNodes) {
      nodes = onlineNodes.map((node: N.NodeInfo) => (
        <NodeRow key={node.nodeId} node={node} />
      ));
    }
    if (!nodes) {
      return <PaginationSpinner hidden={false} />;
    }
    return <>{nodes}</>;
  }
}
