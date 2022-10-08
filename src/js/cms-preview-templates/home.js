import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    return <div>

        <div className="bg-grey-1 pv4">
          <div className="flex-l mhn1-l ph3 center mw7">
            <h2 className="f2 b lh-title mb2 w-40-l">{entry.getIn(["data", "intro", "heading"])}</h2>
            <p className="w-60-l mb0">{entry.getIn(["data", "intro", "text"])}</p>
          </div>
        </div>

    </div>
  }
}