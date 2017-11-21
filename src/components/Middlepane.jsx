import React from "react";
import Posts from "./Posts";
import { Card, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

function Middlepane(props){
  return (
    <div className="col-4">
      <Card>
        <CardHeader>Posts</CardHeader>
        <CardBody>
          <Posts/>
        </CardBody>
      </Card>
    </div>
  );
}

export default Middlepane;
