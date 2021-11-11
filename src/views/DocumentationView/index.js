import React from "react";
import styled from "styled-components";

import DocumentComponent from "../../components/documentation/DocumentComponent";

import Button from "../../components/generic/Button";
import DisplayTime from "../../components/generic/DisplayTime";
import Input from "../../components/generic/Input";
import Form from "../../components/generic/Form";
import Timer from "../../components/generic/Timer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="Button"
            component={<Button text="Hello" className="start-btn" />}
            propDocs={[
              {
                prop: "text",
                description: "The text, or icon, that the button will display",
                type: "string, object",
                defaultValue: "Optional. Default: None",
              },
              {
                prop: "className",
                description:
                  "The css class name that should be applied to the button",
                type: "string",
                defaultValue: "Optional. Default: None",
              },
              {
                prop: "onClick",
                description: "The function that should execute on button click",
                type: "func",
                defaultValue: "Optional. Default: None",
              },
            ]}
          />
          <DocumentComponent
            title="Input"
            component={<Input placeholder="My Input" />}
            propDocs={[
              {
                prop: "label",
                description: "The label that the input will have",
                type: "string",
                defaultValue: "Optional. Default: None",
              },
              {
                prop: "placeholder",
                description:
                  "Any placeholder text that the input should display",
                type: "string",
                defaultValue: "Optional. Default: None",
              },
              {
                prop: "value",
                description: "The value displayed in the input",
                type: "string, number",
                defaultValue: "Optional. Default: None",
              },
              {
                prop: "onChange",
                description: "The function that should execute on input change",
                type: "func",
                defaultValue: "Optional. Default: None",
              },
            ]}
          />
          <DocumentComponent
            title="Form"
            component={
              <Form type="Tabata" onSave={() => console.log("Saved!")} />
            }
            propDocs={[
              {
                prop: "type",
                description:
                  "The Timer type (Stopwatch, Countdown, XY, or Tabata). Is required",
                type: "string",
                defaultValue: "Required. Default: None",
              },
              {
                prop: "onSave",
                description: "The function that should execute on form save",
                type: "func",
                defaultValue: "Required. Default: None",
              },
            ]}
          />
          <DocumentComponent
            title="DisplayTime"
            component={<DisplayTime />}
            propDocs={[
              {
                prop: "type",
                description: "The Timer type. Currently is the same for all.",
                type: "string",
                defaultValue: "Optional. Default: None",
              },
            ]}
          />
          <DocumentComponent
            title="Timer"
            component={<Timer type="Tabata" />}
            propDocs={[
              {
                prop: "type",
                description:
                  "The Timer type (Stopwatch, Countdown, XY, or Tabata). Is required",
                type: "string",
                defaultValue: "Required. Default: None",
              },
            ]}
          />
        </div>
      </Container>
    );
  }
}

export default Documentation;
