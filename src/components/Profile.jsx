import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function Profile(props) {
  return (
    <div className="mb-2">
      <Card>
        <CardImg top width="100%" src="https://assets-cdn.github.com/images/modules/open_graph/github-mark.png" alt="Octocat" />
        <CardBody>
          <CardTitle>Octocat</CardTitle>
          <CardSubtitle>PDX | GitLabs</CardSubtitle>
          <CardText>Tweets | Following | Followers</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Profile;
