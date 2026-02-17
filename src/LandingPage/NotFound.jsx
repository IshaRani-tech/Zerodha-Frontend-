import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="mt-5 p-5 mb-5 text-center">
      <h2 className='fs-2'>Kiaan couldn’t find that page</h2>
      <p className="mt-4 text-muted">
        We couldn’t find the page you were looking for. <br />
        Visit <Link to='/'>Zerodha’s home page</Link>

      </p>
      
    </section>
  );
}
