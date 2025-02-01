import DocumentTitle from '../../components/DocumentTitle';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

export default function RegisterPage() {
  return (
    <div style={{backgroundColor:"black"}}>
      <DocumentTitle>Registration</DocumentTitle>
      <RegisterForm />
    </div>
  );
}