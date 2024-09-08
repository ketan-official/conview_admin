import React from "react";

const ContaintCard = ({data ,onEdit}) => {
    console.log(4,data)
  return (
    <>
      <div class="p-6 bg-white shadow-md rounded-md mt-4">
        <h4 class="text-orange-500 font-semibold mb-4">{data?.section?.name || ""}</h4>
        <div class="overflow-x-auto">
          <table class="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr class="border-b">
                <th class="px-6 py-4 text-left text-black font-medium">
                  Asset #
                </th>
                <th class="px-6 py-4 text-left text-black font-medium">
                  Description
                </th>
                <th class="px-6 py-4 text-left text-black font-medium">
                  Image
                </th>
                <th class="px-6 py-4 text-left text-black font-medium"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="px-6 py-4">{data._id}</td>
                <td class="px-6 py-4">{data.description}</td>
                <td class="px-6 py-4">
                  <div class="flex justify-center items-center">
                    <img
                      src="path/to/your/image.jpg"
                      alt="Image"
                      class="w-8 h-8 border border-gray-300 rounded-md"
                    />
                  </div>
                </td>
                <td class="px-6 py-4">
                  <button class="text-blue-500 hover:underline" onClick={()=>onEdit(data._id)}>Edit</button> /
                  <button class="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContaintCard;
