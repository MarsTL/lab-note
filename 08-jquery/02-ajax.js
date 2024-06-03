//have the dom all created before updates and fetch
$(document).ready(() => {
  const url = "https://anapioficeandfire.com/api/books/";

  const addBookToDOM = (item) => {
    console.log(item.name);

    $(`#books`).append(
      $(`<div>`)
        .css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        })

        .append($(`<h3>`).text(item.name))
        .append($(`<p>`).text(item.authors[0]))
        .append($(`<p>`).text(item.released.substr(0, 4)))
        .append($(`<p>`).text(`${item.numberOfPages} pages`))
    );

    // Assuming 'element' and other elements are defined elsewhere in your code
    /*element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.alignItems = 'center';
    element.style.marginTop = '20px';

    title.textContent = item.name;
    author.textContent = `by ${item.authors[0]}`;
    published.textContent = item.released.substr(0, 4);
    pages.textContent = `${item.numberOfPages} pages`;*/
  };

  const fetchData = (url) => {
    $.ajax({
      type: `GET`,
      url: url,
      success: (data) => {
        //console.log(data);

        //double check if array
        data.forEach((item) => {
          // console.log(item.name);
          addBookToDOM(item);
        });
      },

      error: (error) => {
        console.error(error);
        $(`#books`).append(
          $(`<div>`).text(`An error occured. please try again.`)
        );
      },

      complete: () => {
        $("#loading").remove();
      },
    });
  };

  fetchData(url); // Make sure to call fetchData to initiate the AJAX request
});
