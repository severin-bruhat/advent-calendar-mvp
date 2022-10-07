import React from "react";

export default class AboutPreview extends React.Component {
  render() {
    const {entry, widgetFor} = this.props;

    return <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "about", "title"])}</h1>
      <div className="cms mw6">
       BODY
      </div>
      
      <div className="bg-grey-1 pv4">
          <div className="ph3 mw7 center">

            <div className="flex-l mhn2-l">
              <div className="w-40-l ph2-l">
                <h2 className="f2 b lh-title mb2">TEST h2</h2>
              </div>
            </div>

            <div className="tc">
              <a href="#" className="btn raise">Read more</a>
            </div>

          </div>
        </div>
    </div>;
  }
}
