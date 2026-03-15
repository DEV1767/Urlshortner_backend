import shortid from "shortid";
import URL from "../models/url.model.js";

const shorturl = async (req, res) => {

    const { redirectURL } = req.body;
    console.log(req.body);

    if (!redirectURL) {
        return res.status(400).json({
            message: "URL is required"
        });
    }

    const shortId = shortid.generate();

    const newUrl = await URL.create({
        sorturlid: shortId,
        redirectURL: redirectURL
    });

    return res.status(201).json({
        message: `New url is http://localhost:3000/${shortId}`
    });

};


const redirecting = async (req, res) => {

    const shortId = req.params.shortId;



    const entry = await URL.findOne({ sorturlid: shortId });


    if (!entry) {
        return res.status(404).json({
            message: "No data found"
        });
    }

    res.redirect(entry.redirectURL);
};

export { shorturl, redirecting };