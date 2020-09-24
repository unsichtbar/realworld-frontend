import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ArticleDisplay } from "../article/view/Article";
import { getProfile, getProfileArticles } from "./profiles-api";

export const Profile: React.FC<any> = (props) => {
  const { id }: { id: string } = useParams();
  const { isLoading, isError, data, error } = useQuery(
    ["profile", id],
    getProfile
  );
  const profileArticles = useQuery(
    ["profileArticles", { author: id }],
    getProfileArticles
  );
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Ooops. something bad happened</div>;
  if (data) {
    return (
      <div>
        <div>
          <div>{data.username}</div>
          <img
            src={data.image}
            alt={data.username + "'s profile image."}
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div>{data.bio}</div>
        <div>{data.following}</div>

        <section>
          <div className="profile-articles">
            {profileArticles.isFetched && (
              <div>
                {profileArticles.data?.map((article) => (
                  <ArticleDisplay article={article} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
  return <div>{id}</div>;
};
