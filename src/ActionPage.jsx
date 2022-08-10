import { BsPlus } from "react-icons/bs";
import { AiOutlineQuestion } from "react-icons/ai";

function ActionPage() {
	return (
		<ul className="description__action-list">
			<li className="description__action-item">
				<button className="description-btn">
					<BsPlus />
				</button>
			</li>
			<li className="description__action-item">
				<button className="description-btn">
					<AiOutlineQuestion />
				</button>
			</li>
		</ul>
	);
}

export default ActionPage;
