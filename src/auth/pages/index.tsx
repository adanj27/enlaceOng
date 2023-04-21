import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Layout from '../../components/layout/Layout';

export default function AuthenticationPage() {
  return (
    <>
      <Layout>
        <div className="max-w-2xl mx-auto my-32">
          <Card className="h-64 flex justify-center items-center gap-10">
            <Link to="/auth/volunteer/login">
              <Button type="button" className="px-10 py-2 font-bold text-white hover:bg-orange-500">
                Voluntario
              </Button>
            </Link>
            <Link to="/auth/organization/login">
              <Button type="button" className="px-10 py-2 font-bold text-white hover:bg-orange-500">
                Organización
              </Button>
            </Link>
          </Card>
        </div>
      </Layout>
    </>
  );
}
