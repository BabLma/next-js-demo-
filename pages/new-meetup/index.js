// .com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

const NewMeetUp = () => {
  const router = useRouter();
  const addMeetUp = async (enteredData) => {
    const config = {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/api/new-meetup", config);
    const data = await response.json();
    // console.log(data);

    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own new meetups and create amazing networking opportunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUp} />
    </Fragment>
  );
};

export default NewMeetUp;
