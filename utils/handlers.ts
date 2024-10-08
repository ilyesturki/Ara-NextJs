export const customHandleChange = (
  e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>,
  setState: (prevState: any) => any
) => {
  const { name, value } = e.target;
  setState((prevData: any) => ({
    ...prevData,
    [name]: value,
  }));
};

interface FileFields {
  [key: string]: File | File[] | null;
}

interface StringFields {
  [key: string]: string | undefined;
}

export const customHandleSubmit = (
  e: React.MouseEvent<HTMLButtonElement>,
  fileFields: FileFields = {},
  stringFields: StringFields = {},
  dispatchAction: (formData: FormData) => void,
  resetHandler?: (e?: React.MouseEvent<HTMLButtonElement>) => void
) => {
  e.preventDefault();

  const formData = new FormData();

  for (const key in stringFields) {
    if (stringFields[key] !== undefined) {
      formData.append(key, stringFields[key]!);
    }
  }

  for (const key in fileFields) {
    const fileOrFiles = fileFields[key];
    if (fileOrFiles) {
      if (Array.isArray(fileOrFiles)) {
        fileOrFiles.forEach((file, index) => {
          formData.append(key, file);
        });
      } else {
        formData.append(key, fileOrFiles);
      }
    }
  }
  dispatchAction(formData);

  resetHandler && resetHandler(e);
};

export const customImagesChange = <
  T extends { images?: string[]; imageCover?: string; image?: string }
>(
  e: React.ChangeEvent<HTMLInputElement>,
  setData: React.Dispatch<React.SetStateAction<T>>,
  fieldName: string,
  setImageCoverFile?: React.Dispatch<React.SetStateAction<File | null>>,
  setImagesFiles?: React.Dispatch<React.SetStateAction<File[]>>,
  index?: number
) => {
  if (e.target.files && e.target.files[0]) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        const result = reader.result as string;
        if (index !== undefined && setImagesFiles) {
          setImagesFiles((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages[index] = file;
            return updatedImages;
          });
          setData((prevData) => {
            const updatedImages = [...(prevData.images || [])];
            updatedImages[index] = result;
            return {
              ...prevData,
              images: updatedImages,
            };
          });
        } else if (setImageCoverFile) {
          setImageCoverFile(file);
          setData((prevData) => ({
            ...prevData,
            [fieldName]: result,
          }));
        }
      }
    };

    reader.readAsDataURL(file);
  }
};
