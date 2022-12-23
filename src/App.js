import logoPizza from './images/logoPizza.png';
import imgPizza from './images/imgPizza.jpg';
import './App.css';
import { motion } from 'framer-motion';

function App() {
	return (
		<div className='grid grid-cols-3 gap-4 p-10'>
			<motion.div
				className={`h-64 relative bg-white origin-left shadow-md ${ z-1}`}
				whileHover={{ scaleX: 3.13, zIndex: 5 }}
			></motion.div>
			<motion.div
				className={`h-64 relative bg-green-500 origin-center ${z-1}`}
				whileHover={{ scaleX: 3.13, zIndex: 5 }}
			></motion.div>
			<motion.div
				className={`h-64 relative bg-blue-500 origin-right ${z-1}`}
				whileHover={{ scaleX: 3.13, zIndex: 5 }}
			></motion.div>
		</div>
	);
}

export default App;
