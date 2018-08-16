import React, {Component} from "react";
import {Route, Link, withRouter} from "react-router-dom";
import LargeInfoBox from "../../components/LargeInfoBox/LargeInfoBox";
import CharacterPage from "../CharacterPage/CharacterPage";
import Button from "../../components/UI/Button/Button";

class Create extends Component {
	render() {
		return(
			<div>
				<Link to={this.props.match.url + "/Characters"}>
					<Button
						buttonType = "Character"
						clicked = {null}
						text = "Characters">
					</Button>
				</Link>
				<Link to = {this.props.match.url + "/Items"}>
					<Button 
						buttonType = "Character"
						clicked = {null}
						text = "Items"/>
				</Link>
				<LargeInfoBox
					header = "Create!!!"
					main = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Arcu dictum varius duis at consectetur lorem donec. Aenean sed adipiscing diam donec adipiscing tristique risus. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Dictumst quisque sagittis purus sit. Lectus quam id leo in vitae turpis massa sed. Ultrices neque ornare aenean euismod. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Imperdiet proin fermentum leo vel orci porta. Urna molestie at elementum eu facilisis. Amet purus gravida quis blandit turpis cursus in. Vulputate dignissim suspendisse in est. Tortor condimentum lacinia quis vel eros donec. Eu consequat ac felis donec et odio pellentesque diam volutpat. Varius duis at consectetur lorem donec massa sapien faucibus. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Iaculis eu non diam phasellus vestibulum lorem sed risus. Mi ipsum faucibus vitae aliquet nec ullamcorper. In iaculis nunc sed augue lacus viverra vitae congue eu. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. A iaculis at erat pellentesque adipiscing commodo. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Luctus venenatis lectus magna fringilla urna. Risus viverra adipiscing at in tellus. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Vestibulum lectus mauris ultrices eros in cursus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Senectus et netus et malesuada fames ac turpis egestas sed. Est placerat in egestas erat imperdiet. Eget mi proin sed libero enim sed faucibus turpis in. Ut pharetra sit amet aliquam id diam maecenas. Lectus proin nibh nisl condimentum. Nunc sed velit dignissim sodales ut. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. At volutpat diam ut venenatis tellus in. Amet justo donec enim diam vulputate. Risus in hendrerit gravida rutrum quisque. Justo laoreet sit amet cursus sit amet dictum sit. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Penatibus et magnis dis parturient montes. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Maecenas accumsan lacus vel facilisis volutpat est velit. Consectetur libero id faucibus nisl tincidunt. Adipiscing enim eu turpis egestas pretium aenean. Dictum non consectetur a erat nam at lectus urna duis. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Arcu dui vivamus arcu felis bibendum ut. Nibh tellus molestie nunc non blandit massa. Facilisi cras fermentum odio eu feugiat pretium. Velit scelerisque in dictum non consectetur. Tellus at urna condimentum mattis pellentesque id nibh. Pulvinar elementum integer enim neque volutpat. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Integer enim neque volutpat ac tincidunt vitae semper. Ac turpis egestas integer eget aliquet nibh praesent tristique. Pretium lectus quam id leo in. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Tellus elementum sagittis vitae et leo. Viverra mauris in aliquam sem. Tristique magna sit amet purus gravida quis blandit. At varius vel pharetra vel turpis nunc eget. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Diam sit amet nisl suscipit adipiscing bibendum. Suspendisse in est ante in."
					image = "https://www.publicdomainpictures.net/pictures/130000/velka/clip-art-smiley-face.jpg"
					subHeader = "ITEMS, CHARACTERS AND MORE!!"
					secondary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus et. Euismod elementum nisi quis eleifend quam adipiscing. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Quis hendrerit dolor magna eget est. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Nibh mauris cursus mattis molestie a iaculis at erat. Faucibus in ornare quam viverra orci sagittis eu. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Ipsum suspendisse ultrices gravida dictum fusce ut. Sed felis eget velit aliquet sagittis id. Feugiat vivamus at augue eget arcu dictum varius duis. Volutpat est velit egestas dui id ornare arcu odio ut. Morbi tristique senectus et netus et malesuada fames. Tortor consequat id porta nibh. Viverra nam libero justo laoreet sit amet cursus sit amet. Amet justo donec enim diam vulputate ut pharetra sit amet." />
			</div>
		)
	}
}

export default withRouter(Create);
