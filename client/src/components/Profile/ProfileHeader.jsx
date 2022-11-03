import React from "react";
import Skeleton from "react-loading-skeleton";

const ProfileHeader = () => {
  const profileUsername = "sourabh Panthi";
  const activeBtnFollow = true;
  const isFollowingProfile = false;
  const fullName = "sourabh panthi";
  const followers = true;
  const following = 25;

  const followerCount = 444;
  return (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg mt-20">
      <div className="container flex justify-center items-center">
        {profileUsername ? (
          <img
            className="rounded-full h-40 w-40 flex"
            alt={` profile picture`}
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQjrF-hsZQm06rGDcKRFFRs2FYzwJ71KpLA&usqp=CAU`}
          />
        ) : (
          <Skeleton circle height={150} width={150} count={1} />
        )}
      </div>
      <div className="flex items-center justify-center flex-col col-span-2">
        <div className="container flex items-center">
          <p className="text-2xl mr-4">{profileUsername}</p>
          {activeBtnFollow && isFollowingProfile === null ? (
            <Skeleton count={1} width={80} height={32} />
          ) : (
            activeBtnFollow && (
              <button
                className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                type="button"
                // onClick={handleToggleFollow}
                // onKeyDown={(event) => {
                //   if (event.key === 'Enter') {
                //     handleToggleFollow();
                //   }
                // }}
              >
                {isFollowingProfile ? "Unfollow" : "Follow"}
              </button>
            )
          )}
        </div>
        <div className="container flex mt-4">
          {!followers || !following ? (
            <Skeleton count={1} width={677} height={24} />
          ) : (
            <>
              <p className="mr-10">
                <span className="font-bold">{145}</span> photos
              </p>
              <p className="mr-10">
                <span className="font-bold">{followerCount}</span>
                {` `}
                {followerCount === 1 ? `follower` : `followers`}
              </p>
              <p className="mr-10">
                <span className="font-bold">{following}</span> following
              </p>
            </>
          )}
        </div>
        <div className="container mt-4">
          <p className="font-medium">
            {!fullName ? <Skeleton count={1} height={24} /> : fullName}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;
