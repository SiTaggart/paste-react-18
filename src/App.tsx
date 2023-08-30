import { useState } from 'react';
import { Theme } from '@twilio-paste/core/theme';
import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import { Button } from '@twilio-paste/core/button';
import { DisplayHeading } from '@twilio-paste/core/display-heading';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Theme.Provider theme="twilio">
      <Box as="main" padding="space40">
        Hi <Button variant="primary">Button</Button>
        <Text as="span">This is text</Text>
        <DisplayHeading as="h1" variant="displayHeading10">
          Display Heading
        </DisplayHeading>
      </Box>
    </Theme.Provider>
  );
}

export default App;
