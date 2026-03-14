import React from 'react';
import { Title, Subtitle } from '../components/Typography';
import { CapabilityTemplate, DocImage } from '../components/DocHelpers';
import './Pages.css';

export function FacePassAuth() {
  return (
    <div className="page-transition">
      <Title>FacePass Authentication</Title>
      <Subtitle>Secure, passwordless login using advanced biometric models. In this section it will be explained how the Authentication process works.</Subtitle>
      <Subtitle>
            First of all for a User to use our service, they have to download the Mobile App and Register into our system. The detailed registration FlowChart is as follows:
      </Subtitle>
      <DocImage 
        src="/images/RegistrationWorkflow.png" 
        alt="FacePass Register workflow" 
        caption="Figure 1: Register Workflow"
      />
      <Subtitle>
            After that when the user tries to Login in a Website that uses FacePass, a challenge is created, that has to be signed by the mobile device. The challenge creation FlowChart is as follows:
      </Subtitle>
      <DocImage 
        src="/images/challenge_creation.png" 
        alt="FacePass Challenge creation" 
        caption="Figure 2: Challenge creation"
      />
      <Subtitle>
            The next step is for the user to enter the Mobile App and sign the challenge, by using the biometric authentication. The BE has to verify the signature and it changes the status of the challenge.
      </Subtitle>
      <DocImage 
        src="/images/challenge_approval.png" 
        alt="FacePass Challenge Approval" 
        caption="Figure 3: Challenge Approval"
      />
      <Subtitle>
            While all of this is happening the website that the user wanted to login in the first place is waiting for the challenge approval.
      </Subtitle>
      <DocImage 
        src="/images/user_login_flowchart.png" 
        alt="FacePass User Login"
        caption="Figure 4: User Login"
      />
      <Subtitle>
            And just like that - the User logged in securely. 
      </Subtitle>
    </div>
  );
}