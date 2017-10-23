import Layout from '../components/MyLayout';
import Link from 'next/link';
import FormInput from '../components/FormInput';

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>Next to-do</h1>
    <FormInput />
  </Layout>
)
