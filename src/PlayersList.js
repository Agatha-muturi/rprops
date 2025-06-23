import Player from "./player";
import Players from "./players";
import { Container, Row } from "react-bootstrap";
function PlayersList() {
    return(
        <Container className="mt-3">
      <h2 className="text-center mb-3">Football Players</h2>
      <Row className="d-flex flex-wrap justify-content-center">
        {Players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </Row>
    </Container>
    )
}
export default PlayersList;