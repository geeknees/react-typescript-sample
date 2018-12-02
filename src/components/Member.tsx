import * as React from 'react'

// tslint:disable-next-line:interface-name
export interface MemberPropType {
  name: string
}

export class Member extends React.Component<MemberPropType> {
  public state: MemberPropType
  public render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}
