const tableEditor = {
  hasOnlyHeading: false,
  // Nội dung
  content: [
    {
      title: "Heading 1",
      hideContent: false,
      hasOnlyContent: false,
      itemContents: [
        {
          content: "tiêu chí 1",
          maxScore: 10,
          hasImg: false,
        },
        {
          content: "tiêu chí 2",
          maxScore: 10,
          hasImg: true,
        },
        {
          content: "tiêu chí 3",
          maxScore: 7,
          hasImg: true,
        },
        {
          content: "tiêu chí 4",
          maxScore: 9,
          hasImg: false,
        },
        {
          content: "tiêu chí 5",
          maxScore: 5,
          hasImg: true,
        },
      ],
    },
    {
      title: "Heading 2",
      hideContent: true,
      hasOnlyContent: false,
      itemContents: [
        {
          content: "tiêu chí 1",
          maxScore: 4,
          hasImg: true,
        },
        {
          content: "tiêu chí 2",
          maxScore: 10,
          hasImg: false,
        },
        {
          content: "tiêu chí 3",
          maxScore: 6,
          hasImg: true,
        },
      ],
    },
    {
      title: "Heading 3",
      hideContent: false,
      hasOnlyContent: false,
      itemContents: [
        {
          content: "tiêu chí 1",
          maxScore: 5,
          hasImg: true,
        },
        {
          content: "tiêu chí 2",
          maxScore: 4,
          hasImg: false,
        },
      ],
    },
  ],
  // Hàm render
  render: function () {
    const hasOnlyHeading = tableEditor.hasOnlyHeading;
    const htmls = this.content.map(function (item, index) {
      const headerIndex = index;
      const headingHideContent = item.hideContent;
      let hasOnlyContent = item.hasOnlyContent;

      return `
        <tr indexHeading ='${index}' class="table-edit_item table-edit_item-heading">
          <td colspan="3">
            <div class="table-edit_content-box">            
              <span class="table-edit_item-index font-weight-bold" style="font-size: 20px;">${
                index + 1
              }.</span>    
              <span class="table-edit_content font-weight-bold" style="font-size: 20px;"> 
              ${item.title}</span>
              <span class="table-edit_heading-content-sum ${
                headingHideContent == true ? " " : "d-none"
              }" style="font-size: 16px;">(${item.itemContents.length} tiêu chí)</span>                 
              <div class="table-edit_edit-btn" title="Sửa nội dung"><i class="fa fa-pencil table-edit_edit-btn-child"></i></div>
              <div class="table-edit_hide-content-btn ${
                headingHideContent == true ? "active-revers" : ""
              }" title="Ẩn nội dung"><i class="fa la-sort-up table-edit_hide-content-btn-child"></i></div>
              <div class="d-flex table-edit_editable-wp">
                <textarea class="table-edit_content-input" name=""
                  id="" rows="4"></textarea>
                <div class="table-edit_input-ops-box">                    
                  <div class="btn table-edit_save-btn" title="Lưu">
                    <i class="fa fa-bookmark table-edit_save-btn-child"></i>                    
                  </div>
                  <div class="btn table-edit_cancel-save-btn" title="Hủy">
                    <i class="fa fa-window-close table-edit_cancel-save-btn-child"></i>                    
                  </div>                  
                </div>
              </div>
              <span class="table-edit_content-save-warning">*Lưu ý: Nhấn nút lưu ở ô hiện tại trước khi muốn chỉnh sửa nội dung ô khác</span>
            </div>
          </td>
          <td class="border-0 table-edit_options-box-wp">            
            <div class="btn table-edit_addrow-btn" title="Thêm dòng">
              <i class="fa fa-plus-square table-edit_addrow-btn-child"></i>
            </div>
            <div class="btn table-edit_delete-btn ${
              hasOnlyHeading == true ? "hide" : ""
            }" data-toggle="modal" data-target="#delete_waring-${index}" title="Xóa dòng">
              <i class="fa fa-trash table-edit_delete-btn-child"></i>
            </div>              
            <div class="btn table-edit_show-ops-btn" title="Tác vụ">
              <i class="las la-caret-right table-edit_show-ops-btn-child"></i>                    
            </div>  
            
            <!-- Delete Modal -->
						<div class="modal custom-modal fade" id="delete_waring-${index}" role="dialog">
							<div class="modal-dialog modal-dialog-centered">
								<div class="modal-content">
									<div class="modal-body">
										<div class="form-header">
											<h3>Xóa dòng tiêu đề heading thứ ${index + 1}</h3>
											<p>Bạn có chắc chắn muốn xóa?
                      <span>( việc này sẽ bao gồm xóa tất cả tiêu chí chứa trong đó )</span></p>
											
										</div>
										<div class="modal-btn delete-action">
											<div class="row">
												<div class="col-6">
													<div class="btn continue-btn table-edit_delete-btn-temp">Xóa</div>
												</div>
												<div class="col-6">
													<div onclick="javascript:void(0);" data-dismiss="modal"
														class="btn cancel-btn table-edit_cancel-delete-btn-temp">Hủy</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Delete Modal -->

          </td>
        </tr>
        
        ${item.itemContents
          .map(function (itemContent, index) {
            return `
          <tr indexItem='${index}' class="table-edit_item table-edit_item-content ${headingHideContent == true ? "d-none" : ""}">
            <td>
              <div class="table-edit_content-box">           
                <span class="table-edit_item-index">${
                  headerIndex + 1
                }.${index + 1}.</span>
                <span class="table-edit_content"> ${
                  itemContent.content
                }</span>                
                <div class="table-edit_edit-btn" title="Sửa nội dung"><i class="fa fa-pencil table-edit_edit-btn-child"></i></div>                
                <div class="d-flex table-edit_editable-wp">
                  <textarea class="table-edit_content-input" name=""
                    id="" rows="4"></textarea>
                  <div class="table-edit_input-ops-box">                    
                    <div class="btn table-edit_save-btn" title="Lưu">
                      <i class="fa fa-bookmark table-edit_save-btn-child"></i>                    
                    </div>
                    <div class="btn table-edit_cancel-save-btn" title="Hủy">
                      <i class="fa fa-window-close table-edit_cancel-save-btn-child"></i>                    
                    </div>
                  </div>
                </div>
                <span class="table-edit_content-save-warning">*Lưu ý: Nhấn nút lưu ở ô hiện tại trước khi muốn chỉnh sửa nội dung ô khác</span>
              </div>
            </td>
            <td class="text-center">
              <input type="number" class="juged-input table-edit_input-score" value="${
                itemContent.maxScore
              }">
            </td>
            <td class="text-center">
              <input class="table-edit_content-checkbox" type="checkbox" ${
                itemContent.hasImg === true ? "checked" : ""
              }>
            </td>
            <td class="border-0 table-edit_options-box-wp">            
              <div class="btn table-edit_addrow-btn" title="Thêm dòng">
                <i class="fa fa-plus-square table-edit_addrow-btn-child"></i>
              </div>
              <div class="btn table-edit_delete-btn ${
                hasOnlyContent == true ? "hide" : " "
              } " data-toggle="modal" data-target="#delete_waring-${headerIndex}-${index}" title="Xóa dòng">
                <i class="fa fa-trash table-edit_delete-btn-child"></i>
              </div>              
              <div class="btn table-edit_show-ops-btn" title="Tác vụ">
                <i class="las la-caret-right table-edit_show-ops-btn-child"></i>                    
              </div> 
              
              <!-- Delete Modal -->
              <div class="modal custom-modal fade" id="delete_waring-${headerIndex}-${index}" role="dialog">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div class="form-header">
                        <h3>Xóa dòng tiêu chí thứ ${headerIndex}-${index + 1}</h3>
                        <p>Bạn có chắc chắn muốn xóa?</p>
                      </div>
                      <div class="modal-btn delete-action">
                        <div class="row">
                          <div class="col-6">
                            <div class="btn continue-btn table-edit_delete-btn-temp">Xóa</div>
                          </div>
                          <div class="col-6">
                            <div onclick="javascript:void(0);" data-dismiss="modal"
                              class="btn cancel-btn table-edit_cancel-delete-btn-temp">Hủy</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Delete Modal -->
            </td>
          </tr>
          `;
          })
          .join("")}
      `;
    });
    document.querySelector(".table-editor tbody").innerHTML = htmls.join("");
  },
  // Hàm sử lý các sự kiện
  handelEvent: function () {
    // _this = this của app (mục đích để render lại)
    const _this = this;
    // render time out
    function thisrender() {
      _this.render();
    }

    //document on click
    document.addEventListener("click", function (e) {
      const tableItems = document.querySelectorAll(".table-edit_item");

      //------------------- Delete btn -------------------
      if (e.target.classList.contains("table-edit_delete-btn-temp")) {
        const deleteBtn = e.target;
        const rowItem = deleteBtn.closest(".table-edit_item");
        const showRowOptionsBtnRevers = rowItem.querySelector(
          ".table-edit_show-ops-btn.active-revers"
        );
        const deleteBtnModal = deleteBtn.closest(".modal-btn.delete-action");

        // hide modal
        const cancelDeleteBtn = deleteBtnModal.querySelector(
          ".table-edit_cancel-delete-btn-temp"
        );
        cancelDeleteBtn.click();

        //delete heading
        if (rowItem.classList.contains("table-edit_item-heading")) {
          const indexRowHeading = rowItem.getAttribute("indexHeading");

          if (indexRowHeading > -1) {
            tableEditor.content.splice(indexRowHeading, 1);
          }

          // check if it's only heading left
          if (tableEditor.content.length == 1) {
            tableEditor.hasOnlyHeading = true;
          }

          showRowOptionsBtnRevers.click();
          setTimeout(thisrender, 1000);
        }

        // delete content
        if (rowItem.classList.contains("table-edit_item-content")) {
          const indexRowContent = rowItem.getAttribute("indexItem");
          let indexRow = rowItem.sectionRowIndex;

          while (indexRow >= 0) {
            if (
              tableItems[indexRow].classList.contains("table-edit_item-heading")
            ) {
              const indexHeading =
                tableItems[indexRow].getAttribute("indexHeading");

              if (indexRowContent > -1) {
                tableEditor.content[indexHeading].itemContents.splice(
                  indexRowContent,
                  1
                );
              }

              // check if content has only item left
              if (tableEditor.content[indexHeading].itemContents.length == 1) {
                tableEditor.content[indexHeading].hasOnlyContent = true;
              }
              //console.log(tableEditor.content[indexHeading]);
              //console.log(tableEditor.content[indexHeading].hasOnlyContent);
              showRowOptionsBtnRevers.click();
              setTimeout(thisrender, 1000);
              break;
            }
            indexRow--;
          }
        }
      }

      // ------------------- Add row btn -------------------
      if (e.target.classList.contains("table-edit_addrow-btn")) {
        const addRowItem = e.target;
        const rowItem = addRowItem.closest(".table-edit_item");
        const showRowOptionsBtnRevers = rowItem.querySelector(
          ".table-edit_show-ops-btn.active-revers"
        );

        // add heading btn
        if (rowItem.classList.contains("table-edit_item-heading")) {
          const indexHeading = rowItem.getAttribute("indexHeading");
          const exampleSection = {
            title: "Example heading",
            hideContent: false,
            hasOnlyContent: true,
            itemContents: [
              {
                content: "tiêu chí mẫu",
                maxScore: 0,
                hasImg: false,
              },
            ],
          };
          tableEditor.content.splice(
            //tableEditor.content.length,
            Number(indexHeading) + 1,
            0,
            exampleSection
          );

          // check if it's only heading left
          if (tableEditor.content.length > 0) {
            tableEditor.hasOnlyHeading = false;
          }

          showRowOptionsBtnRevers.click();
          setTimeout(thisrender, 700);
        }
        //add content btn
        if (rowItem.classList.contains("table-edit_item-content")) {
          const indexRowContent = rowItem.getAttribute("indexItem");
          let indexRow = rowItem.sectionRowIndex;

          // find parent element
          while (indexRow >= 0) {
            if (
              tableItems[indexRow].classList.contains("table-edit_item-heading")
            ) {
              const indexHeading =
                tableItems[indexRow].getAttribute("indexHeading");
              if (indexRowContent > -1) {
                const exampleRow = {
                  content: "tiêu chí mẫu",
                  maxScore: 0,
                  hasImg: false,
                };
                tableEditor.content[indexHeading].itemContents.splice(
                  Number(indexRowContent) + 1,
                  0,
                  exampleRow
                );
              }
              // check if content has only item left
              if (tableEditor.content[indexHeading].itemContents.length > 0) {
                tableEditor.content[indexHeading].hasOnlyContent = false;
              }
              console.log(tableEditor.content[indexHeading].hasOnlyContent);
              showRowOptionsBtnRevers.click();
              setTimeout(thisrender, 700);
              break;
            }
            indexRow--;
          }
        }
      }
      //click child div also do parent event
      if (e.target.classList.contains("table-edit_addrow-btn-child")) {
        const saveBtnChild = e.target;
        saveBtnChild.closest(".table-edit_addrow-btn").click();
      }

      // ------------------- Save score value -------------------
      if (e.target.classList.contains("table-edit_input-score")) {
        const inputScore = e.target;
        const rowItem = inputScore.closest(".table-edit_item");
        const indexRowContent = rowItem.getAttribute("indexItem");
        let indexRow = rowItem.sectionRowIndex;

        inputScore.addEventListener("change", function () {
          let newInputScore = inputScore.value;
          // find parent element
          while (indexRow >= 0) {
            if (
              tableItems[indexRow].classList.contains("table-edit_item-heading")
            ) {
              const indexHeading =
                tableItems[indexRow].getAttribute("indexHeading");
              if (indexRowContent > -1) {
                tableEditor.content[indexHeading].itemContents[
                  indexRowContent
                ].maxScore = Number(newInputScore);
              }
              break;
            }
            indexRow--;
          }
        });
      }

      // ------------------- Save checked input -------------------
      if (e.target.classList.contains("table-edit_content-checkbox")) {
        const inputCheckBox = e.target;
        const rowItem = inputCheckBox.closest(".table-edit_item");
        const indexRowContent = rowItem.getAttribute("indexItem");
        let indexRow = rowItem.sectionRowIndex;

        inputCheckBox.addEventListener("change", function () {
          let isChecked = inputCheckBox.checked;
          // find parent element
          while (indexRow >= 0) {
            if (
              tableItems[indexRow].classList.contains("table-edit_item-heading")
            ) {
              const indexHeading =
                tableItems[indexRow].getAttribute("indexHeading");
              if (indexRowContent > -1) {
                tableEditor.content[indexHeading].itemContents[
                  indexRowContent
                ].hasImg = isChecked;
              }
              break;
            }
            indexRow--;
          }
        });
      }

      // ------------------- edit btn -------------------
      //parent div
      if (e.target.classList.contains("table-edit_edit-btn")) {
        const inputEditBtn = e.target;
        const contentBox = inputEditBtn.closest(".table-edit_content-box");
        const contentItem = contentBox.querySelector(".table-edit_content");
        const contentItemInput = contentBox.querySelector(
          ".table-edit_content-input"
        );
        const itemIndex = contentBox.querySelector(".table-edit_item-index");
        const contentSum = contentBox.querySelector(
          ".table-edit_heading-content-sum"
        );
        const editAbleBox = contentBox.querySelector(".table-edit_editable-wp");

        const activeEditAbleBox = document.querySelector(
          ".table-edit_editable-wp.active"
        );
        const hideOptionContentBox = document.querySelector(
          ".table-edit_content-box.hide-ops-content-box"
        );

        // close other edit content box when click different one
        if (activeEditAbleBox) {
          activeEditAbleBox.classList.remove("active");

          const activeContentBox = activeEditAbleBox.closest(
            ".table-edit_content-box"
          );
          const activeItemIndex = activeContentBox.querySelector(
            ".table-edit_item-index"
          );
          const activeContentItem = activeContentBox.querySelector(
            ".table-edit_content"
          );

          const tableItem = activeEditAbleBox.closest(".table-edit_item");
          const contentSum = tableItem.querySelector(
            ".table-edit_heading-content-sum"
          );
          if (tableItem.classList.contains("table-edit_item-heading")) {
            contentSum.classList.remove("d-none");
          }

          hideOptionContentBox.classList.remove("hide-ops-content-box");
          activeItemIndex.classList.remove("d-none");
          activeContentItem.classList.remove("d-none");
        }
        // can edit content
        editAbleBox.classList.add("active");
        if (editAbleBox.classList.contains("active")) {
          const tableItem = editAbleBox.closest(".table-edit_item");
          const contentSum = tableItem.querySelector(
            ".table-edit_heading-content-sum"
          );
          if (tableItem.classList.contains("table-edit_item-heading")) {
            contentSum.classList.add("d-none");
          }
          contentItem.classList.add("d-none");
          itemIndex.classList.add("d-none");

          contentBox.classList.add("hide-ops-content-box");

          //Regex to remove space
          contentItemInput.value = contentItem.innerHTML.replace(/\s\s+/g, " ");
        }
      }
      //click child div also do parent event
      if (e.target.classList.contains("table-edit_edit-btn-child")) {
        const inputEditBtnChild = e.target;
        inputEditBtnChild.closest(".table-edit_edit-btn").click();
      }

      // ------------------- hide content btn (Heading only) -------------------
      //parent div
      if (e.target.classList.contains("table-edit_hide-content-btn")) {
        const hideCotentBtn = e.target;
        const rowHeading = hideCotentBtn.closest(".table-edit_item");
        const indexRowHeading = rowHeading.getAttribute("indexheading");

        const itemContentLength =
          tableEditor.content[indexRowHeading].itemContents.length;

        const rowHeadingSectionIndex = rowHeading.sectionRowIndex;

        const rowHeadingSumContent = rowHeading.querySelector(
          ".table-edit_heading-content-sum"
        );

        //console.log(tableItems);

        if (hideCotentBtn.classList.contains("active-revers")) {
          // when pop up content
          for (
            let i = rowHeadingSectionIndex + 1;
            i <= rowHeadingSectionIndex + itemContentLength;
            i++
          ) {
            tableItems[i].classList.remove("d-none");
          }
          tableEditor.content[indexRowHeading].hideContent = false;
          hideCotentBtn.classList.remove("active-revers");
          rowHeadingSumContent.classList.add("d-none");
        } else {
          // when hide up conent
          for (
            let i = rowHeadingSectionIndex + 1;
            i <= rowHeadingSectionIndex + itemContentLength;
            i++
          ) {
            tableItems[i].classList.add("d-none");
          }
          tableEditor.content[indexRowHeading].hideContent = true;
          hideCotentBtn.classList.add("active-revers");
          rowHeadingSumContent.classList.remove("d-none");
        }
      }
      //click child div also do parent event
      if (e.target.classList.contains("table-edit_hide-content-btn-child")) {
        const hideCotentBtnChild = e.target;
        hideCotentBtnChild.closest(".table-edit_hide-content-btn").click();
      }

      //------------------ save btn -------------------
      //parent div
      if (e.target.classList.contains("table-edit_save-btn")) {
        const inputSaveBtn = e.target;
        const contentBox = inputSaveBtn.closest(".table-edit_content-box");
        const contentItemInput = contentBox.querySelector(
          ".table-edit_content-input"
        );
        const rowItem = inputSaveBtn.closest(".table-edit_item");

        // -------------- save heading ------------//
        if (rowItem.classList.contains("table-edit_item-heading")) {
          const indexHeading = rowItem.getAttribute("indexHeading");

          tableEditor.content[indexHeading].title = contentItemInput.value;

          setTimeout(thisrender, 500);
        }
        // -------------- save content ------------//
        if (rowItem.classList.contains("table-edit_item-content")) {
          const indexRowContent = rowItem.getAttribute("indexItem");
          let indexRow = rowItem.sectionRowIndex;

          while (indexRow >= 0) {
            if (
              tableItems[indexRow].classList.contains("table-edit_item-heading")
            ) {
              const indexHeading =
                tableItems[indexRow].getAttribute("indexHeading");
              if (indexRowContent > -1) {
                tableEditor.content[indexHeading].itemContents[
                  indexRowContent
                ].content = contentItemInput.value;
              }

              setTimeout(thisrender, 1000);
              break;
            }
            indexRow--;
          }
        }
      }
      //click child div also do parent event
      if (e.target.classList.contains("table-edit_save-btn-child")) {
        const inputSaveBtnChild = e.target;
        inputSaveBtnChild.closest(".table-edit_save-btn").click();
      }

      //------------------ cancel btn -------------------
      //parent div
      if (e.target.classList.contains("table-edit_cancel-save-btn")) {
        const inputSaveBtn = e.target;
        const rowItem = inputSaveBtn.closest(".table-edit_item");

        // -------------- save heading ------------//
        if (rowItem.classList.contains("table-edit_item-heading")) {
          const indexHeading = rowItem.getAttribute("indexHeading");

          tableEditor.content[indexHeading].title =
            tableEditor.content[indexHeading].title;

          setTimeout(thisrender, 200);
        }
        // -------------- save content ------------//
        if (rowItem.classList.contains("table-edit_item-content")) {
          const indexRowContent = rowItem.getAttribute("indexItem");
          let indexRow = rowItem.sectionRowIndex;

          while (indexRow >= 0) {
            if (
              tableItems[indexRow].classList.contains("table-edit_item-heading")
            ) {
              const indexHeading =
                tableItems[indexRow].getAttribute("indexHeading");
              if (indexRowContent > -1) {
                tableEditor.content[indexHeading].itemContents[
                  indexRowContent
                ].content =
                  tableEditor.content[indexHeading].itemContents[
                    indexRowContent
                  ].content;
              }
              setTimeout(thisrender, 200);
              break;
            }
            indexRow--;
          }
        }
      }
      //click child div also do parent event
      if (e.target.classList.contains("table-edit_cancel-save-btn-child")) {
        const inputSaveBtnChild = e.target;
        inputSaveBtnChild.closest(".table-edit_cancel-save-btn").click();
      }

      //------------------ show row options btn -------------------

      //parent div
      if (e.target.classList.contains("table-edit_show-ops-btn")) {
        showRowOptionsBtn = e.target;
        const showRowOptionsWp = showRowOptionsBtn.closest(
          ".table-edit_options-box-wp"
        );
        const showRowOptionsWpCheck = document.querySelector(
          ".table-edit_options-box-wp.active"
        );

        // event when click closr options box
        if (showRowOptionsBtn.classList.contains("active-revers")) {
          showRowOptionsWp.classList.remove("active");
          showRowOptionsBtn.classList.remove("active-revers");
        } else {
          // check any active options box
          if (showRowOptionsWpCheck) {
            const showRowOptionsBtnCheck = showRowOptionsWpCheck.querySelector(
              ".table-edit_show-ops-btn.active-revers"
            );
            showRowOptionsWpCheck.classList.remove("active");
            showRowOptionsBtnCheck.classList.remove("active-revers");
          }

          // event when click onpen options box
          showRowOptionsWp.classList.add("active");
          showRowOptionsBtn.classList.add("active-revers");
        }
      }
      //click child div also do parent event
      if (e.target.classList.contains("table-edit_show-ops-btn-child")) {
        const showRowOptionsBtnChild = e.target;
        showRowOptionsBtnChild.closest(".table-edit_show-ops-btn").click();
      }

      // check total max score in tange 100 (click submit btn)
      if (e.target.classList.contains("table-edit_submit-btn")) {
        const submitBtn = e.target;
        let initialValue = 0;
        const tableEditorContentLength = tableEditor.content.length;
        for (let i = 0; i < tableEditorContentLength; i++) {
          const itemContentLength = tableEditor.content[i].itemContents.length;
          for (let j = 0; j < itemContentLength; j++) {
            initialValue += tableEditor.content[i].itemContents[j].maxScore;
          }
        }
        if (initialValue < 100) {
          alert(`Điểm của bạn nhập chưa đủ 100 - ${initialValue}`);
        }
        if (initialValue > 100) {
          alert(`Điểm của bạn nhập quá 100 - ${initialValue}`);
        }
        if (initialValue == 100) {
          alert(`Tạo thành công - ${initialValue}`);
        }
      }
    });
  },

  // Hàm start
  start: function () {
    // Handle event
    this.handelEvent();
    // Render table content
    this.render();
  },
};

tableEditor.start();
