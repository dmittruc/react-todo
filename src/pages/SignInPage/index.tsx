import {useState} from 'react';
import useAuth from '../../hooks/useAuth';

const SignInPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {signIn} = useAuth();

  const onSuccess = () => {
    console.log('zxc');
  };

  return (
    <div>
      <div>
        email:
        <input value={email} onChange={e => setEmail(e.target.value)}></input>
      </div>
      <div>
        password:
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}></input>
      </div>
      <button onClick={() => signIn(email, password, onSuccess)}>login</button>
    </div>
  );
};

export default SignInPage;
