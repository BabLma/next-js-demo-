// .com/ HOme Page
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

const Meetup = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from api
//   return {
//     props: {
//       meetups: meetUpData,
//     },
//   };
// };

export const getStaticProps = async () => {
  // fetch some data
  const client = await MongoClient.connect(
    "mongodb+srv://Saman:nepal123@cluster0.o3wjp.mongodb.net/meetupDataBase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetupDataBase");

  const allMeetup = await meetupsCollection.find().toArray();

  //close the databse connection onece done
  client.close();

  return {
    props: {
      meetups: allMeetup.map((meetups) => ({
        image: meetups.image,
        title: meetups.title,
        address: meetups.address,
        id: meetups._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default Meetup;
