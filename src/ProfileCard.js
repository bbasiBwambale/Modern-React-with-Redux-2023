 //Option 4)function ProfileCard(props){
 function ProfileCard({title, handle, imageSrc, decription}){
    //Option 1).
    // const title = props.title;
    // const handle = props.handle;

    //Option 2).
    //const { title, handle } = props;

    //Option 3).ProfileCard({title, handle})
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={imageSrc} alt="PDA Logo" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4"> {title} </p>
                    <p className="subtitle is-6">{handle}</p>
                  
                </div>

                <div className="content">
                    {decription}                
                </div>

            </div>
        </div>
    );
}

export default ProfileCard;