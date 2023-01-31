export default function SubLayout(props) {
	return (
		<section className={`sub ${props.tit}`}>
			<h1>{props.tit}</h1>
			{props.children}
		</section>
	);
}
