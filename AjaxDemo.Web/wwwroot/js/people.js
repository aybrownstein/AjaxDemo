$(() => {

    function fillTable() {
        $("tbody").empty();
        $.get('/Home/GetAll', function (people) {
            people.forEach(p => {
                $("tbody").append(`
<tr>
<td>${p.firstName}</td>
<td>${p.lastName}</td>
<td>${p.age}</td>
<td><button  data-id='${p.id}' class='btn btn-success edit'>Edit</button></td>
<td><button data-id='${p.id}' class='btn btn-danger delete'>Delete</button></td>
</tr>
`);
            });
        });
        
    }

    fillTable();

    $("#add").on('click', function () {
        const firstName = $("#first-name").val();
        const lastName = $("#last-name").val();
        const age = $("#age").val();

        $("#first-name").val('');
        $("#last-name").val('');
        $("#age").val('');

        $.post('/Home/add', { firstName, lastName, age }, function(p) {
            fillTable();
        });

    });

    $(".table").on('click', '.delete', function () {
        const id = $(this).data('id');

        $.post('/Home/Delete', { id }, function () {
            fillTable();
        });

    })

        $(".table").on('click', '.edit', function () {
            $(".modal").modal();
        });

    $(".update").on('click', function () {
            const id = $(this).data('id');
      
            const firstName = $("#firstname").val();
            const lastName = $("#lastname").val();
            const age = $("#update-age").val();
                
           

    $.post('/Home/Update', { firstName, lastName, age, id }, function () {
                fillTable();
                $(".modal").modal('hide');
                $("#first-name").val('');
                $("#last-name").val('');
                $("#age").val('');
            });

        });
})