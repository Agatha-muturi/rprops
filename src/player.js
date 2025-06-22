import{Card} from 'react-bootstrap';

function Player({name, team, nationality,jerseyNumber, age, image}) {
   return(
    <Card style={{ width: "18rem", margin: "1rem", border: "2px solid #eee" }}>
      <Card.Img variant="top" src={image} alt={name} style={{ height: "250px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey Number:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
   ); 
}
Player.defaultProps={
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: "N/A",
    image: "https://via.placeholder.com/250x300?text=No+Image"
};
export default Player;