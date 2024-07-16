import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({}).sort({ createdAt: "desc" });
  return res.render("home", { pageTitle: "Home", videos });
}
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if(!video){
    return res.render("404", { pageTitle: "Video not found."});
  }
  return res.render("watch", { pageTitle: video.title, video});
};
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if(!video){
    return res.render("404", { pageTitle: "Video not found."});
  }
  return res.render("edit",{ pageTitle: `Edit: ${video.title}`, video });
}
export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body; 
  const video = await Video.exists({ _id: id });
  if(!video){
    return res.render("404", { pageTitle: "Video not found."});
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  return res.redirect(`/videos/${id}`);
}

export const getUpload = async (req, res) => {
  return res.render("upload",{pageTitle: "Upload Video"});
}

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try{
    await Video.create({
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect("/");
  } catch(error) {
    return res.render("upload",{
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
}

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if(keyword){
    videos = await Video.find({
      title: {
        $regex: new RegExp(keyword, "i")
      },
    });

  };
  return res.render("search", { pageTitle: "Search", videos });
};

// - 로컬 더미 데이터 -
// let videos = [
//   {
//     title: "First Video",
//     rating: 5,
//     comments: 2,
//     createdAt: "2 minutes ago",
//     views: 1,
//     id: 1,
//   },
//   {
//     title: "Second Video",
//     rating: 5,
//     comments: 2,
//     createdAt: "2 minutes ago",
//     views: 59,
//     id: 2,
//   },
//   {
//     title: "Third Video",
//     rating: 5,
//     comments: 2,
//     createdAt: "2 minutes ago",
//     views: 59,
//     id: 3,
//   },
// ]


// export const trending = (req, res) => res.render("home", {pageTitle:"Home",videos});
// export const watch = (req, res) => {
//   const { id } = req.params;
//   const video = videos[id - 1];
//   return res.render("watch", { pageTitle:`Watching ${video.title}`, video });
// };
// export const getEdit = (req, res) => {
//   const { id } = req.params;
//   const video = videos[id - 1];
//   return res.render("edit",{ pageTitle: `Editing ${video.title}`, video });
// }
// export const postEdit = (req, res) => {
//   const { id } = req.params;
//   const { title } = req.body;
//   videos[id - 1].title = title;
//   return res.redirect(`/videos/${id}`);
// }

// export const getUpload = (req, res) => {
//   return res.render("upload",{pageTitle: "Upload Video"});
// }

// export const postUpload = (req, res) => {
//   const {title} = req.body;
//   const newVideo = {
//     title,
//     rating: 0,
//     comments: 0,
//     createdAt: "just now",
//     views: 0,
//     id: videos.length + 1,
//   };
//   videos.push(newVideo);
//   return res.redirect("/");
// }