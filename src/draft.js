<div className="container">
<div className="list">
{[1, 2, 3, 4, 5, 6, 7, 8, 9]}.map((item) => {
    return (
        <div className="card" key={item}>{item}</div>
    );
})
</div>


