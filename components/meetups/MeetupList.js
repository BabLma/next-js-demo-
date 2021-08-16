import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
import Link from "next/link";

function MeetupList(props) {
  console.log(props.meetups);
  return (
    <ul className={classes.list}>
      {props.meetups.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <h3>Nothing to Display!</h3>
        </div>
      ) : (
        <>
          {props.meetups.map((meetup) => (
            <MeetupItem
              key={meetup.id}
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
            />
          ))}
        </>
      )}
    </ul>
  );
}

export default MeetupList;
