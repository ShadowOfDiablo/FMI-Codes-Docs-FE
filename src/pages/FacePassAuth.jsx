import React from 'react';
import { Title, Subtitle } from '../components/Typography';
import { CapabilityTemplate } from '../components/DocHelpers';
import { 
  RegistrationFlow, 
  ChallengeCreationFlow, 
  ChallengeApprovalFlow, 
  UserLoginFlow 
} from '../components/Flowcharts/Flowchart';
import './Pages.css';

export function FacePassAuth() {
  return (
    <div className="page-transition">
      <Title>FacePass Authentication</Title>
      <Subtitle>Secure, passwordless login using advanced biometric models. In this section it will be explained how the Authentication process works.</Subtitle>
      <Subtitle>
            First of all for a User to use our service, they have to download the Mobile App and Register into our system. The detailed registration FlowChart is as follows:
      </Subtitle>
      
      <RegistrationFlow />

      <Subtitle>
            After that when the user tries to Login in a Website that uses FacePass, a challenge is created, that has to be signed by the mobile device. The challenge creation FlowChart is as follows:
      </Subtitle>

      <ChallengeCreationFlow />

      <Subtitle>
            The next step is for the user to enter the Mobile App and sign the challenge, by using the biometric authentication. The BE has to verify the signature and it changes the status of the challenge.
      </Subtitle>

      <ChallengeApprovalFlow />

      <Subtitle>
            While all of this is happening the website that the user wanted to login in the first place is waiting for the challenge approval.
      </Subtitle>

      <UserLoginFlow />

      <Subtitle>
            And just like that - the User logged in securely. 
      </Subtitle>
    </div>
  );
}