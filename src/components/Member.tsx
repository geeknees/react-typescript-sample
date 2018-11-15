import * as React from 'react';

// tslint:disable-next-line:interface-name
export interface MemberPropType {
  name: string;
}

export class Member extends React.Component<MemberPropType> {
  public state: MemberPropType;
  constructor(props: MemberPropType) {
    super(props);
    this.state = props;
  }

  public render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}