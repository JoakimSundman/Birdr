import Home from "../views/Home";

export default function HomeP(props) {
	return <Home currentBird = {props.model.birdOfTheDay}/>;
}
