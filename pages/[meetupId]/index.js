import MeetupDetail from "../../components/meetups/MeetupDatail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

const Details = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://Saman:nepal123@cluster0.o3wjp.mongodb.net/meetupDataBase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetupDataBase");

  const allMeetup = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: allMeetup.map((meetups) => ({
      params: { meetupId: meetups._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://Saman:nepal123@cluster0.o3wjp.mongodb.net/meetupDataBase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetupDataBase");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId), //converted string meetupID to object ID using ObjectId()
  });

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(), //converted _id filed back to into String using toString()
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
};

export default Details;
