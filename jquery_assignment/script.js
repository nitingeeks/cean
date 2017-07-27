$(function () {
	$('.countryAlgin .tick').attr("border","1");

	let k = 1; // For Serial Number
	let $cName = $('#cName');
	let $mRecords = $('#mRecords');
	let $fRecords = $('#fRecords');

	function addOrderRow(record) {

		$('#records').append(
			'<tr data-id="' + record.Country + '"><td>' + (k++) + '</td><td><span class="country noedit">' + record.Country + '</span><input type="text"  class="form-control edit country"></td><td><span class="male noedit">' + record.Male + '</span><input type="text" class="edit form-control male"></td><td><span class="female noedit">' + record.Female + '</span><input type="text" class="form-control edit female"></td><td><button class="btn btn-info noEdit editRecord">Edit</button> <button class="btn btn-success edit saveRecord">Save</button>  <button class="btn btn-warning edit cancelRecord">Cancel</button> <button data-id="' + record.Country + '" class="btn btn-danger deletealgin">Delete</button></td></tr>'
		);
	}
	// get all json data nin table form
	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/data',
		success: function (records) {
			let keyValue = [];
			let count = 0;
			$.each(records[0], function (i, record) {
				keyValue[count] = i
				count++;
			});
			$('#records').append(
				'<thead><tr><th>S. No</th><th>' + keyValue[0] + '</th><th>' + keyValue[1] + '</th><th>' + keyValue[2] + '</th><th class="addRecords" data-toggle="modal" data-target="#myModal"data-toggle="modal"> + Add New Records</th></tr></thead>'
			);
			$.each(records, function (i, record) {
				addOrderRow(record);
			});
			mapReturn(); // call to D3 graph
		},
		error: function () {
			alert("Error : 202(No Data Found)");
		}
	}); // End Data posted to table	

	$('#addNewRecords').click(function () {
		let formValid = true;
		$('#newRecodForm input').each(function () {
			if ($.trim($(this).val()).length == 0) {
				$(this).addClass("warning");
				formValid = false;
				$('.warning').focus();
			} else {
				$(this).removeClass("warning");
				formValid = true;
			}
		});

		if (formValid == true) {

			let record = {
				Country: $cName.val(),
				Male: parseFloat($mRecords.val()),
				Female: parseFloat($fRecords.val()),
			};
			$.ajax({
				type: 'POST',
				url: 'http://localhost:3000/data',
				data: JSON.stringify(record),
				contentType: "application/json; charset=utf-8",
				dataType: 'json',
				success: function (newRecords) {
					$('svg').remove();
					addOrderRow(newRecords);
					mapReturn();
				},
				error: function () {
					alert("Error : 201(Data not added.)");
				}
			}); // End Ajax posting data
			$('.close').click();
			$('#newRecodForm input').each(function () {
				$.trim($(this).val(''));
			});

		}
	}); // End Single row Added	

	$('#records').delegate('.deletealgin', 'click', function () {
		$('svg').remove();
		let $removeRow = $(this).closest('tr');
		$.ajax({
			type: 'DELETE',
			url: 'http://localhost:3000/data/' + $(this).attr('data-id'),
			success: function () {
				$removeRow.fadeOut(300, function () {
					$(this).remove();
				});
				$('svg').remove();
				mapReturn();
			},
			error: function () {
				alert("Not been able to delete row");
			}
		});
	}); // End delete row and update tro table and graph

	// Change the row to Edit Mode
	$('#records').delegate('.editRecord', 'click', function () {

		let $editRow = $(this).closest('tr');
		$editRow.find('input.country').val($editRow.find('span.country').html());
		$editRow.find('input.male').val($editRow.find('span.male').html());
		$editRow.find('input.female').val($editRow.find('span.female').html());
		$editRow.addClass('edit');
	});

	// Change the Edit to read mode
	$('#records').delegate('.cancelRecord', 'click', function () {
		$(this).closest('tr').removeClass('edit');
	});

	// Save the edit details in list
	$('#records').delegate('.saveRecord', 'click', function () {
		let $editRow = $(this).closest('tr');
		var record = {
			Country: $editRow.find('input.country').val(),
			Male: parseFloat($editRow.find('input.male').val()),
			Female: parseFloat($editRow.find('input.female').val()),
		};
		$.ajax({
			type: 'PUT',
			url: 'http://localhost:3000/data/' + $editRow.attr('data-id'),
			data: JSON.stringify(record),
			contentType: "application/json; charset=utf-8",
			dataTpe: 'json',
			success: function (newRecords) {
				$('svg').remove();
				$editRow.find('span.name').html(record.Country);
				$editRow.find('span.male').html(record.Male);
				$editRow.find('span.female').html(record.Female);
				$editRow.removeClass('edit');
				setTimeout(function () {
					mapReturn();
				}, 1000);
			},
			error: function () {
				alert("Error in updating data)");
			}
		}); // End Ajax posting data
	});
});