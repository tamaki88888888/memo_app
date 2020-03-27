import Link from 'newxt/link';
import Layout from '../components/Layout';

import Address from '../components/Address';

export default ()=>(
	<Layout header='Address' title='addres book. '>
		<Address />
		<hr />
		<div>
			<Link href='/address_add'>
				<button>add</button>
			</Link>
		</div>
	</Layout>
)

