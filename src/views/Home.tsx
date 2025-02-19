import { Link } from 'react-router'

export default function () {
  return <>
    <h2>Home</h2>
    <ul>
      <li>
        <Link to="/seller">Seller</Link>
      </li>
      <li>
        <Link to="/buyer">Buyer</Link>
      </li>
    </ul>
  </>
}
