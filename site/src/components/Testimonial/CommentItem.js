export default function CommentItem({comment}) {
    return (
        <div className="col-md-6 mb-4">
            <div className="card border-0 shadow p-4 h-100">
                <h5>{comment.names}</h5>
                <p className="text-muted">
                    {comment.comment}
                </p>
            </div>
        </div>
    );
}