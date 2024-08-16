"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CustomSelectImage from "@/components/Common/Custom/CustomSelectImage";
import useAddProject from "./useAddProject";
import CustomTextArea from "@/components/Common/Custom/CustomTextArea";
import CustomSelect from "@/components/Common/Custom/CustomSelect";
import CustomButtons from "@/components/Common/Custom/CustomButtons";
const AddProject = () => {
  const {
    projectData,
    typeData,
    handleChange,
    handleTypeChange,
    handleImageChange,

    handleSubmit,
    handleReset,
  } = useAddProject();
  return (
    <Dialog>
      <DialogTrigger className=" w-full h-full  flex justify-center items-center bg-grayscale-600 z-10 rounded-full">
        <FontAwesomeIcon icon={faPlus} size="1x" className=" text-white " />
      </DialogTrigger>
      <DialogContent className=" flex flex-col items-center gap-6 w-full px-14 ">
        <DialogTitle className="text-center text-xl capitalize text-grayscale-900 font-medium ">
          add new project
        </DialogTitle>
        <DialogDescription className=" w-9/12  flex flex-col gap-4 ">
          <CustomSelect<"MDTR" | "GDEE">
            label="Type"
            value={projectData.type}
            onChange={handleTypeChange}
            data={typeData}
          />

          <CustomTextArea
            value={projectData.name}
            onChange={handleChange}
            label="Project Name"
            placeholder="Enter Project name"
            name="name"
          />
          <CustomSelectImage
            label="Project Image"
            image={projectData.image || ""}
            handleImageChange={handleImageChange}
          />
          <CustomButtons
            mainButtonOnCLick={handleSubmit}
            secondaryButtonOnCLick={handleReset}
          />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default AddProject;
