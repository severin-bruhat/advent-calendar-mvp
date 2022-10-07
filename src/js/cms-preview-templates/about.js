import React from "react";

export default class AboutPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;

    return <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
      <div className="cms mw6">
        { widgetFor("body") }
      </div>
    </div>;
  }
}
