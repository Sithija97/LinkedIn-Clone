import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { ProfileImage } from "../components";
import { IoPersonAdd } from "react-icons/io5";
import { FaLongArrowAltRight, FaPencilAlt, FaPlus } from "react-icons/fa";
import logo from "../assets/logo.svg";

export const Profile = () => {
  return (
    <div className="flex flex-wrap justify-between pt-3 pb-[7%] px-[15%] h-full">
      {/* main profile section */}
      <div className="basis-[73%] h-full overflow-y-auto">
        <div className="bg-white rounded-lg">
          <img
            src="https://img.freepik.com/vektoren-premium/abstrakte-dunkelblaue-moderne-futuristische-wissenschaftstechnologie-high-tech-digitaler-abstrakter-dunkelblauer-bunter-designfahnenhintergrund-vektorabstrakte-grafikdesignfahnenmuster-hintergrundwebschablone_181182-33425.jpg"
            alt="cover-pic"
            className="w-full rounded-t-lg"
          />
          <div className="px-[4%] pb-2.5">
            <ProfileImage styles="w-36 rounded-full -mt-20 p-1 bg-white" />
            <h1 className="text-xl font-semibold text-gray-900">
              Sithija Shehara
            </h1>
            <b className="text-sm font-medium text-gray-500">
              Senior Software Engineer | React JS | MERN | React Native
            </b>
            <p className="mt-1 text-sm font-[450px] text-gray-500">
              Maharagama, Sri Lanka &middot;{" "}
              <a href="" className="font-medium text-blue-500">
                Contact info
              </a>
            </p>
            <div className="flex items-center my-5">
              <ProfileImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2pbV-upXCYmFkNKSfqxF02ELy7IcavaMObvYfoBdAgzgNJya28K8vtNdpCoFpVr9QEk&usqp=CAU"
                styles="rounded-full w-8 mr-1"
              />
              <small className="text-gray-500">
                1 mutual connection: Addy Oswami
              </small>
            </div>

            <div className="my-5">
              <button className="inline-flex items-center bg-blue-600 mr-2.5 py-1 px-3 text-white font-medium rounded-[4px]">
                <IoPersonAdd className="mr-1" />
                Conneact
              </button>
              <button className="inline-flex items-center bg-gray-300 mr-2.5 py-1 px-3 text-gray-900 font-medium rounded-[4px]">
                <BiSolidMessageSquareDetail className="mr-1" />
                Message
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg my-3 py-5 pb-7.5 px-[4%]">
          <h2 className="text-sm font-medium text-gray-900 flex items-center justify-between mt-2.5 mb-3">
            About
            <button className="p-2 rounded-full hover:bg-slate-100">
              <FaPencilAlt />
            </button>
          </h2>
          <p className="text-sm text-gray-800">
            I'm a tech enthusiast, developer with a passion for innovation. I
            thrive on challenging projects and am always hungry for new
            knowledge. Currently, I'm focused on improving my skills in React
            and Node as I strive for continuous self-improvement and achieving
            success in all my endeavors.
          </p>
          <span className="block text-right text-xs">See more...</span>
        </div>

        <div className="bg-white rounded-lg">
          <div className="my-3 pt-5 px-[4%]">
            <h2 className="text-sm font-medium text-gray-900 flex items-center justify-between mt-2.5 mb-3">
              Experiences
              <button className="p-2 rounded-full hover:bg-slate-100">
                <FaPencilAlt />
              </button>
            </h2>
            <div className="flex items-start my-5">
              <ProfileImage
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABLFBMVEX////lQzU0o1NCgO/2twQ4fO98ovJHhPC1yvj7/f82eu6Dp/PlQTP2tQAtoU7kOCf2sQAln0nthn/kPC3jMB3j6/z87ewsdu71wr/ukYvoXVPlSTz2yMXpaF798vH6393++vFmlvLt8v1qt33c7eAXnEFdsnOEwpPn8+r41dPyr6vwoJvsf3fnU0fjKhPqb2b99ODR3fq02b2n0rFLq2XI487rd2/iHwD0ubX0tZX3wCXwmy/mUDX725fzqSXqbT33wUvsfTL74KfvkC75zHL868jseDnkNzjmRkfpYDzlRCLyoQD3xDqowPaWtfVZjvH61oLZsQDLtDZbqU+xs0GXsk9zrlRrsmHbuzUrqmmWy6PA1qeGvaxCiNw4n3ZIkM1KmbM/mphLlMBCrEsst5zPAAAHfUlEQVR4nO2a6XbaRhhAsRDxpsVCMiBkFgcEmMU4ILDrxKnrJWlTL9mb0Npu0vd/h44kwCwa7cMIn7m/OPZBZy7fMt8MxGIEAoFAIBAIBAKBQCAQCAQCgUAgEAgEQoTJp0zyuBcSiNRept5oyMlms99vNptJWW7UM3sp3Mvyzl5dbuayrRVekvgR4OVKK9tuNo4KuJfnnnxGbrcUkedFkVmZhhHBnxml1ZZ3cK/SFZm+ApYsMrMeE0bG/5XkHu6lOlBI8vt2HpNG/CHTiG5TyO/kDiU3ImOhfSkZzfJJZbKHvAcTU0fi5b3IhSeVae/zXqLyGB1Rjljx7CRFXypmdFqNCCVbodHyVCuziFL7CLfDiKMcLwZQ0eFX5EgEJyWveK77eRi+HYFtdC94WEwbUWngdqmv+C78OR0pibVJ52UplLAM2c9iLJxUcj+ssJhILWw2heZ+qCr6DprE5dIO3UXEVTWFnBS2Cy8/HRdJxnSkTrURxAWTS74fwq4/45LEddUhh7ZVjuD7uHbM+txNBfQDZ4wTv2jcCticp6U2JpVYRnG17w/vNZRWNgdoDS8yLIWkPi6XQs5FwTDgtNbKJus7j5VQyDT6WcXiFAdGZlwuedl5s2R4MdtsWByH9Ts1ZWbOZvjm4i2GHDkXPy/2rUxMUkfJ1uR8CvoYtmm50HJKMn6/b38Bm9+RlfE5G2NPjsWSDrslI2WPHFeX32kOcw2ry47D1M/z7k7zqbrC43aJOXRlvpVxWwB6UwS1j/F0WbftZIyU83K6ah/yOZwnZdtOBnLG29PkLJpVuuOXd7YuMs61eaV4/PLVCiw2Io/9rsgTJzT9+leIDbNkLsVTlqa3flOsbBhpuVxiZ8dAhmbPX72dl8F8g+edC92F1lNtzoZvR+Li2z2Xp0MZeuvNjI2oZHCvziMnIxfA+dupwlm2gokVLyZk6Ne/M5NJtmy/u7i8mpSh6T/GqcYokfniyy1n0y40/Wa044j4Too+KV5szcjQ56+GgYnAl17eODidjYwxDuiBwXa14pvLeRdgo6cav3SBiZ3NZZmx45wrooJ7aZ6xKBmTl++WbY+xLhmTP5dsKAMc0BAZ9sr5zevXz3yzjUDGsv6NqjlxIbOZTvgk/QKBjHX96zIHbmQ24j5BIVM8gcmwRbQya+vhy8CamZuSCSRzg0AG1sy2LtDKbGw+X6DMGVqZxC4CmWOYzCVimVsEMpDyX0qZA6iMi84cRCYeD3/XfFoy0D2zuIQyTyoyT0mmCBuaUXczJDJXT0kG1wQQX13kOIN4NkMyAeCampHI4DrPJJ6FL2Nz0nTRAYIcAVDIwO8A3iOVSW+GfzgLeDsTQOYahQyknbFbH2ouZOKrDkBlENwBxIrvLYuGpT9+6jrLvFhz4DoBkUmguGqy7gDs8WeK00J4+nYaIrOK4hLQqgOw7LcvFEcJveBPv4bIJHaRyMwXDXD5SgG4UvCn70I6RPoGQWe2mgHYz9SQ4KGBZRmS+o/NfafJsl9GLsFDswaVQVL/s982s/Rf1FiG6gR8NkQFVcnM/A6A/fadG8tQQsl5r7HjBWxPRXGfafL4Cw29I0+hDgI9eRe2y2yshbT2OUZ5xrIfvky7gL0mSA9Yg2bZLaKSGecZ2PS/UrMIlbLv527DA4NiZB5i/N4MpNinORdgU/XbQ9dvYC7xxHWo659CPzuz9GyKjW18PnUNOmQizLKY/hvNrSursBhlI/hrAvAkQ3PKHFOkP0JUjNj4sbFxicdvQjeY5G/VRsZPg37+DH5sQ3GXMYWdC7DxWjfPV2FzjC6ziUThkY5taCjVU4de3161O06jOcpMogm2NoLmfkxbX0vb1AsYZRBqmJTtQ0MJ1MBlcMr/3NnkGMgyxBWjM3Cw4YRK18XYWR5o6v1DAh6aNNpWZlKr2CearlNy0il3KwJHqd//hRfNIgITi/U4Bxk91yp2ydarVijjE+GoH7eQVEsjm5encUo0Q4fTSl1LH92EG30eHHf/YGmzgeC3DJbUSk6JZq6T47Rq51GoVqv1BhXjH5PW339uWBTOBsqpbIqe5pxpppCgqiqlVSoVTdP018L8Gzn1R3zOBsmlLIQO59JmHCPO5h3q/d2MDcpzzDwDLzKOqNzDVKqhHf3nqbopG9dw//28nejRqwvqZCNqJRctzYON+uPu0WaBBYPEhhLuH4Z9IIHmRnaxNmAcSCy8+FHZ6OPARjy9qN1y1qYasg13f5e+XXS9oLKhBPUBlwugS4W74QS75Q1Kx+1k4wKOc/52FC3lkqfRxs4l0H11ONS6VBjTAMdV8bsAeiU1cHAEys1ZexHUug53No5hUaMRFpNyVQigo2qdiITFZB3kmk8dlYtKhk3Qq/jQ4VSh6v9rKpSAac1bK+DUyNS9BbWBRtmdkCdFAJUIlb0l5WpFsz3ymyKU5uriEz+9QbUCtg7BwojjwJ8prTR5BxV5yp1uFYSI0u+XVEHHeAHiUap2O72liMkUtXKv0+kOBoOqwWDQ7XR65eXzmKZmgHsVBAKBQCAQCAQCgUAgEAgEAoFAIBAIhJD5Hz478+HRNNAiAAAAAElFTkSuQmCC"
                styles="w-12 mr-3"
              />
              <div className="w-full">
                <h3 className="text-sm font-semibold text-gray-900">
                  Senior Software Engineer
                </h3>
                <b className="block text-sm font-medium">
                  Google &middot; Full-time
                </b>
                <b className="block text-sm text-gray-500 font-normal">
                  March 2022 - Present &middot; 2 years
                </b>
                <p className="text-sm text-gray-500">
                  Frontend engineer improving accessibility, writing
                  documentation, and building UI components.
                </p>
                <hr className="mt-2.5" />
              </div>
            </div>
            <div className="flex items-start my-5">
              <ProfileImage
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX////yUCJ/ugAApO//uQDxOgBytADyShT2j3v/+/T/tAAAnO74+/R7uACpz3T0+f50wPTxMgD1hW//rgDwHABnrwDxQwD4s6ejzGgAle0Amu5ovPNVGgEPAAABAklEQVR4nO3biQnCQBRF0bhkceKWxGjU/vsUHKzgMyDh3AIenAJeVUmSJEmSJEmSJEmSJEmSpH/tVocaxu/KcW5CzQWF9SZU22Vhsw3VEBISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhKuSDi0oe4/4SlUSeHYxXpk4XIOtRQUSlL5LtHyzCFYQeGzD/V6Z+CUQk0Fhf0u1jUL0z5UIiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRckXD97zxJkiRJkiRJkiRJkiRJkhTrA29gzkcc3y0uAAAAAElFTkSuQmCC"
                styles="w-12 mr-3"
              />
              <div className="w-full">
                <h3 className="text-sm font-semibold text-gray-900">
                  Full Stack Developer
                </h3>
                <b className="block text-sm font-medium">
                  Microsoft &middot; Full-time
                </b>
                <b className="block text-sm text-gray-500 font-normal">
                  March 2022 - Present &middot; 2 years
                </b>
                <p className="text-sm text-gray-500">
                  Frontend engineer improving accessibility, writing
                  documentation, and building UI components.
                </p>
                <hr className="mt-2.5" />
              </div>
            </div>
          </div>
          <hr />
          <button className="p-2 w-full flex items-center justify-center gap-1 text-sm font-medium text-gray-600 hover:bg-slate-200 rounded-b-lg">
            Show all experiences <FaLongArrowAltRight fill="gray" />
          </button>
        </div>

        <div className="bg-white rounded-lg">
          <div className="my-3 pt-5 px-[4%]">
            <h2 className="text-sm font-medium text-gray-900 flex items-center justify-between mt-2.5 mb-3">
              Education
              <button className="p-2 rounded-full hover:bg-slate-100">
                <FaPencilAlt />
              </button>
            </h2>
            <div className="flex items-start my-5">
              <ProfileImage
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcCAwj/xABDEAABAwMDAgMGAwQHBgcAAAABAgMEAAURBhIhEzFBUWEHFCIycYEVQpEjM6GxFiRSYsHh8EVTcoKSkyU0Q2PR0vH/xAAZAQEBAQEBAQAAAAAAAAAAAAAABAMFAgH/xAAqEQACAgEDAwIHAAMAAAAAAAAAAQIDEQQSIRMxQSJRBTJCYXGBsRQjkf/aAAwDAQACEQMRAD8A7jSlKAUpSgFKUoBSlKAVFan4sFwP/sK/lUrVW9o8ifG0xJcgpbLYSfeVK7pbwckffHnx2BNeZ/Kz7HuVyKllWm74ZKVlpExhR2t7/wAjXdP5h51DIlvONvK6UppUNnA66S/uAA5S4s54rY0ff0onzot4VHatUhJ96W8koaSrppAG9Q+Ygdj4foUtlTiUvwra+hl5soSz1gVoQRwV7zySPAdvXvXD1G1Uwy+cYL69zsfBCwevdbxCRsWfhf6QZGVfIQCnAwCAo85PlzmpqGm22qEWbxDHvSnlKYdjL93WobvhBAxkgY8MelfC22WW3LYkLC4iWDuStuQVPElKk4zgBIwew71Mqt0RTvVfaD7yeQ48StX2JqaWvoq4WW/1g1WnnPuQaodzCH5inAGCv4d3KkBZAwSCMg8DJSccV1exyW5dqjOsoKEFsJ2E5KCOCM+hFc8uVvje7PPtMstvttlaHNg+EgZH8q6HYmmmbPBQwhTbYYQQlXcZGefXmul8N1Eb90orBLqq3XhMkKUpXVJBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFVD2o9T+iclLTq0BRCVISP3gPG3PgPWrfWrcIjM6I9FlIC2XkFC0nxBr5JZWD6u5xe1tOouEyKiI8/Gei75KAoKUU7UgkJ9AeB44NTlpmSnXENymHW2wxubecb2B/acFQ8fLg1bdPQ7HbLq7Ejz2ZF3U18QUtPUDSTwMDwGR9apGrZWprCmJMvohTXZC1MNdOSpKUEpKlEJDQwPhwMlR7eprjaj4cp1ZazItq1LU+OxvWZ2bduo7AhvupeWdi1jptISOAdx75xngHmtafGukZU0ypzjUqJ8YjsoSW1I7juMkHkZ+tSns2uj120pNtMNLFvuUQbEupy4DvTkPbTg/Nu48xVJ1JeLlbp1xtbnQujjW1tyZ1HEKBGFbQlZX2+uDmvlnw6uNacFzx7HqN9jm4vwWRc9m4Wltxze0046y3JBSdzKVKTuz6bT38jmuqNKQ40hbSkqQQCkpPBHpXL4dtu9zhMynra65+JOsPuOF9pTXTBRkHaBhOxPbb6eNdGtdwt9wY3WyQw8y0ot/sVAhJScEcdsYqv4fR0Yzilxngx1Nm9p58G/SlK6BKKUpQClKUApSlAKUpQClKUApSlAKUpQClK0Z92t8CTFjTJbLL8olLCFqAKyO+KA19Q6itmnYyX7pJDQWcNtgbluH+6kcmtG+3CHdNGTptvubaI70VfTltuYCTjg58DVE9sdtQxerfdEOBTkhBYU2TkpxyFJHgPA/aufBhsq3kEgncUk/Bu/tbexPr3rCy5QeGU1adzW5H0tb7sB+NcLcoMTGSHUOeZ/MFZ7hXIOalL/qC66hcaVdHUKQworaabRtSgkY+vbiopx1LSN7iglI7lRxSGJlxWEWq2zp2eQppk7f8AqPFTRdklhFso1Qe5n2jPyYT6noMl+K6pOxS2VlO4etfP4lFxS1KUtxSlrUs5KlE5JqUb0lq5YyLGhsYB2uyUpI+1a8jT+qITRcladklod1R1BzFfelbg8q+jdk3G9V3xnTiNPtSUIiBtLAdSja6loDGAc9yBjPHFevZ4lLWtrUhl73dJ37wF7UuAJwE+vJ7VXkTG+r0l72Xv928gtq/Q19HWkPNlLqQUk558D5inUlGS3+B0oSg+n5O+6i1dZtOyYka6Suk7JJICQVbED86sdk54z/nU3HdbfaQ6y4lxtY3JWk5Ch5ivzLIcUkPzJLr8l9ScuOPLLi1ADgEnuBXd/Zza/wAH0lBaVILpWjqqIc3ITu52p8gPKqq7VPsQ209PGS00rw04h1AW0tK0nspJyDXutTEUpSgFKUoBSlKAUpSgFKUzQCsGs5rCscZoDyr7/Y1wP2iQbkxq2Uu+q64lj+ovJThvpD8ifJQPJGcnv9L1rbX0yx35u32tiNIS22Fyesojk9kgjtxnwrn+q9QzNU3NqXLaSzHjI2x4wXuCVEfGsnxPgPIfWsLZxUWslNFc9yaXBFurdecDj7zr7iU7EqdWVFKfIelYhx5l1npttnje9SyncvnCGUf2lnsBXltiXOnR7ZbEBydLXtbSRwgeKlegFe9a3yJYIrmk9LPqDaFH8UuCT+0lu+Kdw52g5H8POsaqnP1TKL71X6IH0lXLTGlninYjU16bOFPOZTEYV5JT+bHnUHd/aDqq4ABc9yIwoZQzFSGk47DGO/bFVuZGXGUjIJbWkKbUBwRU5EgKvGnUlgASYJKcbeVo5P1qlzUEn4IcOTNKO9d57cl8Tpai1tyTIVyVHA8fQmsQdTX2CQqJeJrZHIw8Tj9antJ25TVleuhIUhTzQLZPgHACD5khSh96HRiomrHYMhaPdWldRsuH96jPA/wNY/5MFJxb7Hvovbk34XtJMxlELW1pYu8VQ5f2BD6R5g+NSszTQ/C1XzR8s3iyjJdjq/8AMRfMY7nHl3+tc4v6Qm9zEN/EA6UjA/hUrYbjd9Fz2blGeEd9RTuiKV++R5KHgK2e2cVnyeYylB5iTLLrb7CHWTuQvsofyrYZlz2IioLU+UiCTkRUOYQD/P7ZxUpqSLb7laka20u0UQXjsusFPHQcyMrAHb18Mc1C/CtA43IUMj1qOcXU/sdGucb1yuUdJ9iLlxDE9hLJ/A0KzGdPADv50t+afM+ea6nXGdI+0P8Ao/YGLTJtz8r3QqbaebUlILXdOcnuO32rp2lb8xqOztXGOhTYWSlTayCpCgcEHFWwkmuGc6yLUm2iYpSlezMUpSgFKUoBSlKAVGXuU8xHYaiq2SZL6GW17c7cnKjj0SFH7VJmoidtd1BamCCVNpek5A4TgBAz/wBw/oaAlU0VnHBA+tZFQ2tJr1u0ndpkVSkyGYrimlJGSFbTj+NGCqe1HTdpFql35KDGuKAAHGj+/JOAlaex+veuU4AHZQHl4195dyn3NCDOukqY0CFALdyg+RwODWjcHFMwn1tn40oO0+vYVBbJTkkkdOiMq4Ntk5bJP9GtFXLVYP8A4jcVmDblHu02D8Sx+mf0rmDsWQ0EOOtKCXBuQo87x9a6F7XyLfF01YmThqJbwspx+ZWOf0qm2S/SLUC2G23o6jnpuDO3nkjyqxpxXpWTntqUss3NKyWpc1q23JPXYcSW2Ur7IJ7ep7njxIHI71cLFZE2FtxSXlSA8QpKCAPPxPBSB+bHPcADBr5RF6aueJDDcbq8KLaxhWcjuPrjt4A1LSFrdUpSlFWCQEH8x9fv/wDPljjaq5yltxhPuiyuvCz3PpaYout0UAW/cIzgef6SiQ693Sn5iCAQFHGOQkedSWq0hkw5yWEuLS70VArUCUq9QD4geBrZ0khtOnYJRgKcb3uY8Vk/F/HNaOs5bbqGLaF/GtxLi/7iQe5+pxXK3znq1HwuCzbFVfkqTdttlkhu3eVHLzyFbyo87VEnaADx48H8wBIIIwaJdZy7pcHpa0BKnTkJB3YHh/rA8a6gyffYa2305WyvpupVyk4VlKiPHkE/8p/tGqtd9QWyB12bNDaTKJCS8psEJ45Az484ru6S2W58Zl/CC2KwbHsivybXqM22ekLtl3T7s+hfy5Pyqx/D71uXS2KsN8n2ZZymM5ln1aVyn9O32qgSLhKkSkSnXCp1ohSSEgAEHIwBXXfaItMx3TV+b/2hB6TvmVAAg/z/AFq66G6HJlRPbYsFeisLlTY0Rt9Ef3h1LXWWncG8nGceNd70ppuHpi2CFCU4sqVvddcOVOLPdXkO3YVwAgkZSsoUCClQ7pI7Gr7oHV18maohW+5T+vGkIc+FbYSrclORgj0BrHTTiuH3KNXXJ8rsddFaNxmORJluQEtlmS+WXFKOCk7FKSR904+9bqfLyqH1celZVSgUpMV9mRuV2SlDiSo/9O6rCAmQc5rNYTWaAUpSgFKUoDB7VEtbV6qfIVy3AaG3/iWv/wCoqWPaoFglvXMtOch22MqxjttccHf/AJqAn6+chxtppTjykpbSMqUo4Ar6VDaytrt40rdbdHQlb0iMtDSVHAKiOP40COTe0ZWnHrxHd0+uEqQpLglGIoYJ4xuA4z696p05PUZxwMuoz9AsZqauunbzYo7b91tpjsLWEBxC0rAVjgHB4qGnNqdhPoScKKDsPr3H8agm31E2sHTrj/qaTyb3tvQlOsofW3hkwms7ACdoHOKrMBGmAttyU7LIUQFMvdk8nupGM+B+9XH2utpuuntL6kYG5t2MGXCPA4BGf0qi2Swu3Da+8+3FhEkddxWM48hVVuMZbwc+D5LtZ2tOQWGpURthIyhK3XDuICioHkn/AFxXoXWMTxKS+ranPu/xKUfXGa9wI9ij2lmLDlod3+DJDjy1HnclIydw2g9vyY8aslq1BbUKTFuBiQpwAyeENvpI4W2rsQf8q4N0trclFyOjBZ44RA2iU/FMtu1F9L0hSkLiu4SY6yMoewr8vzZx5CtNEiE20txlT4QsKHvTqSEvKzjcVHg571fJsK0TlhyaiG8tI4U4pJIH61mZcrTAiD3uVFaYAAS2pSefQJ8f0qSOsi36YPL7mvRaXMimqkRk3GYhmS2rrIy2lKs7zk54Hf8AzqMv9r0wFvvy3UsPIcXvDL3KjuVxt8+a3ZzkFma9e5MZMRpoISywhvC0hR+ZY8FqwDjwSDnuBUHcWLBfpG5iemPLUdqfhwFDzV+vf0rqUxaknyl5wSzeVjhlenJsTjalQlzGVgfI4kLC/ofCuj34rX7PtDF3hWV4GO42GuZXCzTIMhDDiQoOq2NOoUFIcOfAj6iur+0JCYR01Ykf7Pg9RwZ+VRAAH8/0rqcKvKeSaCbsSwVV5RSw4pOchJIx9K7NoGxaWZgQp9rYhvXBLI3yd/UdCinnkkkePauO/FuSlptTji1BCEJPKlHsBV79n2kr1B1dHnXK1OxI7LLp6iloO5Z2gAhJOeCr9Kw0+fYr1ePc68nvWvdIqZ1ulQ3PkfZW2fuCK2BxXl5aUNqUs4SlJUT5AVac40dNylzrBbpTqitx2M2pajjlW0ZPHrmpKq57OlbtD2RRVuzEQc471Y6AUpSgFKUoDBqnXO5M232jQA/1EplQCxuHKQrqZTu8uxq4GuQ+1NDo1MlKnSG3YqFtlK9uzaopUVcjjCj25GTWVs9kcnqCy8HXwc1hVV7Ql5VerC0684HJLRLbyh2Kh457HjxHFWIjNe4vcso+Nc4OQe0/VT1xdk6cagJbaYdQXX3+VEjChsT4f8X8KovHj3x+tdr1HoG13+7JuUqTMZWEBC0MLCUuAds8Zzz4EVyvWdkY05qVy3RH+rFW0mQ0lThWtkHgoUTzyRkZ8z5ZM18JP1F2lsj8i8m9pKOxqXTN10RLWEvcy7cVHt44+yifsa5DLakJlmNcN6HmT0FJd7tbeNvoBV4DkqLKZnW93ozYqwthzwz/AGT6HsanNU2aP7QrYvU+nGAxf4wxc7dn4lED5kjxPkfEeorWqalH7mGoq2T+xWLTppyAY8uRscPUC0rSoYSnHcev28vKp+UsS21paZR0VYwy8ErSpZ5WVeR9R3PPrUfJvQFoWwJpWsM9KQHVpyknjtnI8sY4rzDvVtbW0qQ+2pWM4bcRweO5Vjjv2rmTVsnukuUbQ2JYRJQYTUKOG02uEtKSVb3Yjaj3z3K6xb3UQXHjGixG+sVFTrOxpaSfAEZIA8MEV8UXqD8XRlh0DkoKk/EOTwMncRjJHGfDng7JvsXZubeBSBygFAKuOD3rKTtfEo9z36fcinH5D8FUWM303FhSQ9kdjjf9CQrJ88DJJxik3OA5b5BYd2+adpzkZ4q82+dHYnJ60ppJCFlKQncFFSk8fbYK1nbBM15qwM2RIVHDSQ9L2kNNgHkk+fPA8f41dpXJT244J7ktuR7IrALle13OeSi0Wke8yFK4QVAfCD4eZ+lblxuLl8vE27vDAlOfsknwaHCf4c/epXUlwt8S2I0XpVZNsjK3XGZkZlOZ+QKHcZ7n0AqCUUtoUcEJSk8AZ4A8K21Fn0I10tf1s+8CS5BuESc22hxcV8Ohpw4SsjPGa73pS/M6jtSLgww6yCooUhwdlDg4PiM+Nc8077Mmbtp2JcpF2lMTpaOsegpC2kJUPhTgjnAxkg98102w2tmzWmLbmDlEdsICsYKvMmvdMJRXcx1E4TeUuTf4qta/v7Ni07IWsgvvoLLLeeSVDGfoM5qyK4FcQ9p16F41D0YSt7cJPSCk85UTlRHOCMgD0r1bPZHJjGO5nUPZ6gN6JsqEuJcCYiBuT27VYarXs4jKi6MtiFoKFKZCykoCcZ8MDirLWi7Hx9xSlK+nwUpSgMVRvarbXH7RHns4HubwLpSjKy2r4SB5cq59M1eq1LrAaudtkQn8ht5BSSO6fIj1B5rxZHdFxPUXh5OOaJ1J/Rq4KTLWgQn1APuE4SyokkYHlyK7W2sOJC0EFKhkEeNcAlW5y1TZEGUhsuQ8BC3cftFnncOPh8weeRV+9m2qi7usNw6TTkbDcZZXy7gcj7cYOeecgEcy6e3nZI1thlbkdBWCU4BwfOuAXrT9/Y1JMhOw5Vymur6gkoRxISeyio8JxwnHGNvAxX6A8a+brrLS0IccQhS87QogFWO9VTgprDM4WODyj84ToU22ylxLlGcjSkJ3FCyCFJPiD4ivEd+Tbp7dwtkgxprfCXUj5h/ZUPEGrd7XJUhzUkf3lrpQmGD0HVJ+Fwn5ju9P9eYqa40xuC3cHYMpuA4oobkKaIQT/gOO54PnUcoOE8wOjCyNla6hMXKVpbWOBqVpdjvCgAqeyMsvn+9/nUHcvZFqBlJds7sS8MK/PGcAP6E4/jXkgKTgjg+FeWWzEWFwpEiGvwVGeU3j7Dj+FaR1K8mM9G+8WQjmg9WIWEKsE0k9vgB/xrehey3WMxaEiyqZSv8A9R9xKQPryT/Cp9vUGpWU7G9T3PaDxuWlR/UivlJu16mAiZf7o+kjBQZGxP6JxWr1EEsmS0tjNqL7NrFp0CTre+ME/lgxDlayPDjk1t3fVjsq3i06cifglmA2qSjCXnh64+UH9fpVcbYabUVpTlZ7rV8Sj9zzXvJ6iGkoWt1w4QhtBUpR8OAM1jK9y4ijevSxj6pswhDbLYQhKUISOAOwFb/4NePw5FzTapSoKwSl1KcnHnt74+1R81lbKpEScy9EkIThbLo2rRnsfUGv0DoyTNmaZtztzjliSWEhaCnGcDGceGe+K+VU5+bufb79vydiE9kcGZD0qFSytDEl5TsWOsYLTZ/luOVY8N1XftzWMYHFR98u8Wy29c2avCEdkg8uK8Ej1NWZUUc9vLIb2i3k2rTzrbK1Jlyf2TIbxuye558vOuMxYzl0lxLWyQuTKwkNr+FKiUq3YIHOME57ZFSF41DIv1wXOk+7OnatttlXCW0YJBBPPbbyfEnyq2+yO1F6XLvDrBQ0B02AUJSlKzwsoHcDgDn18zUTfWs+xul04nUWUJQ2lCAAlIAAHgK91gdz2rNXE4pSlAKUpQCsHtWawaAoXtNsinmEXiLHS65HSQ6PHb4K+x5rmUZS47f9VfdEhpLhU+hafhXvCt2M5HGeD/ex41+iFoStJStIUlQwQRwRXDddWdyyageLbKTAeUZDSEJIycfJk5HCsnAxx+lQ6in6om9U/pZ0zROpGrxb2WX3EonIBSpC1Dc4E8bwPEetQ+rYS7ww/Nv8N5EONI6UBhtwIUkk7C+4rsAecDsE8nvxzSC+q3Sm34U1Ud1Kirqt5VjPxAbVZKTnI8iOPGutaX1pEvraoU9DcaYG0haHRhDiiOQATkc54POK1pvUlhnmytrlEHanbYw+5b9QMJTb2VpyJDRLCHu6Tk8NnHgCUng8Zq067jypejbnGtsYyHno5QhtvGSk8cZ9KiL3pa3QLMxJXEiSY0FS3pLDzaek4gkqUUpVwlQOMenFRTMaXBt0SNGkqYeuxMgWqQpaYsZonO1C0kFspTjISognOE1SZLgpenNM3C+XgWttp6GGRvkuvslJZT4DBHJJ8PqfLPz1JYZembqLfMkMyCtrqtutpKcpzjBBJ5+9dKsGrPwq0sN39mSlKlKSxJ3GQHUAkJyr5j9VDmtm56c09r1TF3ZuErCEFpDsRwAKT35CknNTvTx24RTHUyUk2cnttnvV4aeetFpemNMuFtbiXG0J3YBI+IgnuKjVPf1UvJHZBUAe/wBDX6HsNqt+mLSzboz21tBUQt9Q3LUTkk9s8mqa/wCz/SjrjkuTdJbSHnVPGOZTaUpKjuKeE5xk9s18emTSwax1kuclYvGgbra9PG8Jltyy2kOORWWSD0z8xByclPf7GvXspjy3tWM3GLEdcg+7uNOydnwA8EYJ7+Par7e9YRIKoEazPNSCuQhh/DanA2gpJTnGACSAOSO5POMVi63S9OrlR4bBhsMPNsYjgLfXv7KST8LafUhX0rRVRUk0Tu+bi4s29VO2GLMizLhBE66R0KXEYabLjxHjgDwz4njNbkpcu52eJcLU4ESUhL7bQXlDvHLaj69s+BqsWPTjokOR0ynbbdojy/fJTSuo9NjOglG5xWdxBAG4jIKDjGed62vnSapiJLT7NjCS4yuRIDjiXc/EkZJJCu4z45rXhcsxLHEvEaRaPxJxSmGQFdUPDaWikkKSr1BBFca1VqSVf7kmTyiKw9iOMY2JSMlZzxntyeK1tT6ouOoLsVyGVMRGj02GUklPxE/EfylRwCD4ZxzUW0hLbTiuktbzac5SCpe0K3HbggZ4xUF9zfpiUV1+WfW1WuXf34VvbS0H3Q2VN7CC0Mdz9E5+9foKz25i1W1iDGH7NlASCe6vU+tQmh9MossdyXKSly4yjvddUkbkjA+Ht6c1acVRRXsjyZ2T3MwKzSlbmYpSlAKUpQClKUAqM1DZol+tTsCcjc2vBBHdCh2UPUVJ0r41nhjODg9/01drIyY02O49HyVe9tp3JcA+VOO6FduPGone6+yxJSpDL8hQWBt6mMHHHOc4PxA9ueeK/RL6EuNKbWgLQoYUlQyCPIiuT6v0fMtzyJEBpyTCb6hSplP7VkYACfUDnt5VBfp3F7olNdifEiI0zru52lDzFyeRc4jjhQkOflPiDgEp7HuMYrpTF509qyM9bw+wp9KOWnk/E2SO6c8HGRynNcVeYdMptkpUw81wyoq+QnBJC/BRx8vbJr5updU6SlO1p5zrIQkJQlSOColPdK854+1fYaiUXhh1p9juN3002bWo20LTLZhGO0lKgEu4SdqVZBA5PfwzU3Z4SLdaokJv5WGUt588DFc70LrGQ7MjW+Y+0qGdzbTrqsLIAJCiSeexGPSumIUCgKBBB7HNWQsU1lE8ouLK7ruyP32zmNGbZWdxDgWAF9MjB6aiCEqHBBI8McZyK9ZtLlQlxEB2M4qMx03JUVAcRtJBSdnBz4kHnzro1eT617yfClQNGvN3C5puDqXIU5mOodEqT0nWVqUnGVE+I9OKm2IVu0+t2a9MLXURh5yS6P2hHOST41jVd5NltapDZb6ylhDZdOEg9yT9ACa41e75K1Ctu5SHPlXsQhlO5aRjHw57E96wsvUOPJpCtyL5f/aLF6rbdjLS+qjJluYGU9sJHfgqHJwAQfrVEvU2ZdpaXbq80rcpAWh0gZCRhJwCcBR/XNaMVLUZLjpWs7nQVtrRjI52pScfFz+lbtptM6/S3Its3KcdUpZddOUowQAonGePAE1DK2dssIoUYwXJGsNSHJPuiI5VKWztDOSpxaz22gZGSP8ApHGa65oHSSLbEam3BlRmuNAdN0fugDkDueeanNO6agWMFTCN8hWSp5fJ577fBIPfAqdqyqnbzLuYTszwjArNKVSZClKUApSlAKUpQClKUArB9azWFdqMEPqe/M2CE2+40p5151LTTSVBJUo+pOAPP+Rqnu+0t9hw9a0tLaS70XFNSVnargYyWwD8XHgORzUvq4tyruxGc2LQ3HJUhQBGVHHb6CqVGbhTmWlRGoruUJKYsxGSEkq27Vd+dpI78VyNTr3Xc4LxjP7LatNuhufku0mxWXWNubltR/dX0Ok7+knehY4IV4H6g/Q1ztegtSQnpWLemUEo2hTbmOt8RIX3yDg4xjPFX/RdzhWq1+5TkiA71lrKVDDfxKzkKHGOfSri06h1AW2tK0K7KScg/erYxhfFS/hO5SreDgL2l781Ntb79tmOtNykrfWmMogDxHTxz9RV3iRdVsMKdtzCbPDCc/12alIHqG9iwgfcH0rpRx6VU9eWebdk2z3FsOdOT+1SskoSggjcU9jg4ODR6aKe5ZyvuOrnhlWg651Kh9UcwmZ6W0qUt1AKy4B2U300jcn1KUj1r72vUmqL690mn4cN056TailHWH91W10ZHiM5HjV8s1njWeL0YqcrPLjp+d1Xmo1po0vCRqP8abCkL2HLA/d9Tt1Mf2scZr3sm8ZZ53R9jnWsbTc5raA9HuEm8h9pTSHxvSpO7kIKcNgYJJ7evpCO2i8ypRU3ClvS20E9ToLQpI/3fTwcf8QJ+1d95zjPFPDnOKzWkS7ybPfWfhHINMez+5zQj8WSuHEBDiQvhaFjvtTuOM8nJ8+x71Y5mrrVprfCtFnlSSh0tLLCUpC1gZV6qPmQMetWSdqW1RFdMSuu7n93GHVV98du3jXNn7UZC1yVxI8QKeWsvrdPUO5RxwkgdiPGsL769LFJPk911ztfJd7FrmBdnGmlxZURbzpZQXQkguAcoJSThXoQKtg71x+FAgQ4guMBfWW0+Hi8e+5C8KwPy9iPtXXkEKSFDxGRWuj1X+RFv2Z5vq6bSPdKwKzVpgKUpQClKUApSlAKUpQCsKGRis1g0BV9S2mWqYm5Qm+v+y6bzCcBRAOQpPme/Fcwn6fk/hqWrXOedeYUFZKEpW1021JbRt/5jnx5ruxqOuVlg3HmQyA7jh5HwrH3FQXaPdN2VvDff2ZRXdhbZdjkkebPguNMoW4WSHS51MHpobwSe3iOPLnNLfd0x22H3WSw8411HHLa4tjpj4c7kEjPzetXidpOelpxuO+xPaWkpLUsbFEHw3pH+FVedplxC0ql224sdJOG1BIkpR8QOQUkq/LjkVzHRZW25Qx94lSsjJYi/wDpIwdVykocWze1raDnTBnRgRnngFIRnsfE1vwdZzJGei9Z5gGfiacWjt3yPiqrxYbf4lGWu7sr6ckPKYX8ClYQpPYkckqGeB2r0mxSfwiDGdbbL6JZdeU2cfCpalHnjjBxWb1dkOFN/v8Afuj2qYy+kuKtWXFtrqrgW8NAZ3maoDH/AG68uaruClBCGbY2tQ+FKpC1E/baM1CXaMp6M2lhgOpafbcLJIG9KTyBnj/8qNsFmeiSkvSUgLTHaRwEqSVAEEA9+OO1eIfE75QcnZh/hHp6WvdhRJmbqq45dbdvkKKW0rUsRomXEhON3Kyocbh+XxqIcvMWY6luS9cp52kkyVqDYIBO1SBhIPB/LUNdrElm4SJ0mdHjKlOOodS88BtbWFAKT6/Jx/dFb1vsTk11T7DU2TJdSQt6NGKG8kFJwpzAIwfAntW++y6K9cpfjj+GbjGD7I+H41cJEZhUBDMNtbMg9ENBa0OtgYST25yT27AVrOxJF1lM3WPOPuoXlxSljprSFIO0n1G7t5Vc4GiriXt6WYlubByCVF5z5AgnHCQSB61ZrXpC2QQ2t1Kpj6MELfwQk+iR8I+wqijQzXKio/0ynqIryUHSWm7lNguwWlKMF8hciS83tSlR/eBocFWccHsO+Sa6402G0JQnO1KQkfSvQGCBXqupVTGtPHdkk7HN8mBWaUrY8ClKUApSlAf/2Q=="
                styles="w-12 mr-3"
              />
              <div className="w-full">
                <h3 className="text-sm font-semibold text-gray-900">
                  University of Moratuwa
                </h3>
                <b className="block text-sm font-medium">
                  Bsc. Hons Information Technology and Management
                </b>
                <b className="block text-sm text-gray-500 font-normal">
                  2017 - 2021
                </b>
                <hr className="mt-2.5" />
              </div>
            </div>
            <div className="flex items-start my-5">
              <ProfileImage
                src="data:image/png;base64,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"
                styles="w-12 mr-3"
              />
              <div className="w-full">
                <h3 className="text-sm font-semibold text-gray-900">
                  Ananda Collage &middot; Colombo 10
                </h3>
                <b className="block text-sm font-medium">Commerce</b>
                <b className="block text-sm text-gray-500 font-normal">
                  2014 - 2016
                </b>
                <hr className="mt-2.5" />
              </div>
            </div>
          </div>
          <hr />
          <button className="p-2 w-full flex items-center justify-center gap-1 text-sm font-medium text-gray-600 hover:bg-slate-200 rounded-b-lg">
            Show all experiences <FaLongArrowAltRight fill="gray" />
          </button>
        </div>

        <div className="bg-white rounded-lg">
          <div className="my-3 pt-5 px-[4%]">
            <h2 className="text-sm font-medium text-gray-900 flex items-center justify-between mt-2.5 mb-3">
              Skills
              <button className="p-2 rounded-full hover:bg-slate-100">
                <FaPlus />
              </button>
            </h2>
            <span className="inline-block my-2.5 mx-1.5 py-1 px-4 border border-gray-500 rounded-full text-xs font-medium">
              React js
            </span>
            <span className="inline-block my-2.5 mx-1.5 py-1 px-4 border border-gray-500 rounded-full text-xs font-medium">
              React Native
            </span>
            <span className="inline-block my-2.5 mx-1.5 py-1 px-4 border border-gray-500 rounded-full text-xs font-medium">
              Redux
            </span>
            <span className="inline-block my-2.5 mx-1.5 py-1 px-4 border border-gray-500 rounded-full text-xs font-medium">
              Node js
            </span>
            <span className="inline-block my-2.5 mx-1.5 py-1 px-4 border border-gray-500 rounded-full text-xs font-medium">
              Firebase
            </span>
            <span className="inline-block my-2.5 mx-1.5 py-1 px-4 border border-gray-500 rounded-full text-xs font-medium">
              MongoDB
            </span>
            <span className="inline-block my-2.5 mx-1.5 py-1 px-4 border border-gray-500 rounded-full text-xs font-medium">
              REST API
            </span>
            <span className="inline-block my-2.5 mx-1.5 py-1 px-4 border border-gray-500 rounded-full text-xs font-medium">
              Tailwind CSS
            </span>
            <span className="inline-block my-2.5 mx-1.5 py-1 px-4 border border-gray-500 rounded-full text-xs font-medium">
              Chakra UI
            </span>
            <span className="inline-block my-2.5 mx-1.5 py-1 px-4 border border-gray-500 rounded-full text-xs font-medium">
              Material UI
            </span>
          </div>
          <hr />
          <button className="p-2 w-full flex items-center justify-center gap-1 text-sm font-medium text-gray-600 hover:bg-slate-200 rounded-b-lg">
            Show all experiences <FaLongArrowAltRight fill="gray" />
          </button>
        </div>
      </div>
      {/* right sidebar */}
      <div className="basis-[25%] h-full overflow-y-auto">
        <div className="bg-white py-3.5 px-6 rounded-lg mb-3 text-center">
          <small className="float-left font-semibold">Add</small>
          <p className="mt-7 mb-2">
            Master these 6 Concepts of Wed development
          </p>
          <div className="flex items-center justify-center">
            <ProfileImage styles="w-[60px] rounded-full m-1" />
            <img
              src="https://www.techjunkie.com/wp-content/uploads/2015/03/apple-logo-black2-1.jpg"
              alt="apple logo"
              className="w-[60px] rounded-full m-1"
            />
          </div>
          <b className="block text-xs font-medium mt-2">
            Brand on Demad in Apple
          </b>
          <p className="inline-block border border-blue-900 rounded-2xl py-1 px-4 mx-auto mt-5 mb-2.5 text-xs text-blue-900">
            Learn More
          </p>
        </div>

        <div className="bg-white py-3.5 px-6 rounded-lg my-3 text-xs">
          <h3 className="text-[16px] font-semibold mt-2.5 mb-5 ml-5">
            People you may know
          </h3>
          <div className="flex items-start my-1.5">
            <ProfileImage
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUREhgVERUYGBgYGhgaGBkYGBgYGBgaGBgZGRgZGBgcIS4lHB4rIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCs0MTQ0NDQ0NDQ0NDQ1NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAN0A5AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQUGAgMEBwj/xABAEAACAQIEAwYEBQIDBgcAAAABAgADEQQSITEFQVEGImFxgZEHE6GxFDJCwfDR4SNSchUkQ2KCkhYzU6KywvH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQEBAQEAAgMAAgMBAAAAAAAAAQIRAyESMUEiURMyYUL/2gAMAwEAAhEDEQA/APH4Rwm6BCEIBCEISIQjAhBRztwnDnqC/wCVebGT/D+AqfyoznqdF9pTXkzlfOLpUwhPI+0Cs9Ew/Z5yfyqNL+H0nQeyxc2YIT0PKZf55/S/+GvM4S74/scRchCLf5dR7StY7gtSkdrj6+omufLmq68eso2ELQmrMRRwgKEcIChHFKghCEAijhAUI4oSIQhAcIRwgQhCAQhAQBVvoJJYPDBNW1J/Tb7zPAYUWU7lj7DlLLwPhoer3v0nNtpbkLzDyeT8jTGe1IdnuCmp3635f0rbSWpVWmtkUAR0AALAAWm00CwnJbbXZMyRqSoXNjtry6zsyHcb7TOhhLC07KdODjiqchbfeN+EU66nOu432I9ZIHCgkGduGw+lhLSdV1ZHinbPsi+FYugzIdQQN+oPjKURPpTiWCWtTZKg0YW8jyI8RPD+1nA2w7sxGzWaw011DDwM6vFv/wA1z+TP7FahHFOhiIQhAIQhAIQhAIo4SoUI4oBCEIDhCEAhCEAm7DUi7hQLkzTLJ2a4eSGqMCLAZbjfnp6A6yu9cz1Mna6cNQVQNf8AlB0sp8b7aCWPs8py5ibk/b+XkWyhQytl11sBsDsb+vpYyU4M4XKoPM//ALOPX06PH9rLTMksG4vrIlKl50Un6Sjo+02WXlNlJhI1HM303lleJMMJuoVADI5H85sS/jJl5VNZ66cSb6iVHthw1KiB2FwwyNtsfytrzBlna85cfTD02U9I776fH+PHzxj8I1CoyOCCpI15jkfWc0ufb7B2ZKumt0a1tSPyk+n2lNndjXZ1yWcpQjhLIYwjhAUI4QFCOKVBCEIBCEIBHCEAhCEAlt4RiSMFrreow15gAHztrKnLV2Xs9FlI0VyT4Cw/pM/JOxbN9u3EAk3P6jy8Bb9/rOzh7agHznI2JXYbjKPC7EX+pndQGZgFGxJ97afeYanpri+1gw77STopfUSPwVG2/wDOUlaICzF1Oqmom5FnGz2OmkzXG23lkJCmRznTTAkR+OG3WbKXER1kq2dS7pcThqjQzZSxyNuwHmRMnKsNCDFis9eq827cUf8AdnBGzAg+us8vnsnbaj/ule3JQT5XF545Ovxf6ubX+xQhCaqFCOEBQhCAoRwgYwjhKhQjhAcIQgEIQgd3CKCPWUVL5FuzgbkL+n1Nh6y+Lj8NXw1SklNaDqLplUIXC+KjveIPWUzs3Tz1WXm1NwviQVIH0l0rYSmMtOo6oEAsfKcvmt+XHX4c5+H/AHqoisEbvk3JB7w00a2h2IsJaeDG6huv9TaQ/EMGtSndSDtY8jqBv7+8lFwj0aYNPvCwunL06Sl12Gc81UzXxfy/ym5N9DtpveQuO7TOlwDb/UQB6Cd78OrVu6j5Q43yk5eRzKDqbka8ppTsVRpC9ZXc8yCH9lGokTibLfpAt2yrsfzIfIW+skuFcfevVVNO9pvtpN9XsZRqa01dR6qR6GPBdmhgqqMCc5ICZ7EAnQkgW2H3lryq5+Uq0cRwLrTLoblRe222+s87xXH3cGzkLf8ATp9Z7OyZ6bLpdlP6dNR53t6zz0dnsPkzHDM2VmFgzZbhspNr+Gx1lZxe9vpT8Jx/IbZn15kB/v8AtPR+yXEmqgAODoPA9djObhvD6IYBcEAPBV8tzLDhuzNGnUFemDTIGqpazc9fGTbKiZs+2WKwiVqhSrZle2ZTsygAkaeNpRfiTw/CpTR8LTVGVxTYooRD3SdhuRlteXpUWpUzgsoyspLAqdWz2sfUSl/FBEp00RP11GqAeASx9LtLZ1r5yRW5z8Lb9vNYRwna5SijhAUI4QFCEICimUUqCEIQdEI4SwIQjgd/Aa4p4ui7bCol/InKfoZdu1nBycWUpkKrqGubka3zW9p5zPV+G4g4rDUncgkJ3TuVNrEMegII8jOXz5+q6PBrnYhquHWhTRVvZeZNySbm5+slcIc6gmRePYhAGtmU96x/eLAYoqCOv0mH3G3eXiyriWt3Gy/Y+fhJLB4oMO/oRuP38pU14iKdr2nSOMZxoubppe0Lz2s711BvewHuZHrTzVS78h3QSNCd/XSQf4ms98i2A3NrDy15yQ4Pkq0QS4FTM19dRY5ctvSSj9XThRzKAR4TKthwKbaC4vcc/ORvAKrqSHI0OhnZxVmVGKNZyCFP1256R+K3/ZowuKQ6Pa4NtP5pOiszA93VBr4nw8p5/U4xVSrlrIqPybUI/ip5+Us/CuLFrCo4N+gAW/lHWlz+xMPRFQMHG/py6zzb4sUgr4Wx/wCG/wBGH9Z6XRcE6ka6e955T8VaxOPCX7qU0AHS5JM08M/k5vLf48UmKOE7HMUI4QFFMooChHFAUI4oBCEJUEI4SwIQhAJaeyXGlpA0XNgSSpO2osVP39TKtHI1manKtnVzexeuJ4mkTlpkZt2trpe0VE5wBp/Osp/D6mWoPHT3/uBLHhq+RwTt0nJrHxvG038vbPiuCIcAE6g7cjy9NZ00qLhQqtbTU9PADqZJvSV0RibWO/hqAPeOqOdrgj6ruPtKNO8b+FVM1MA6Ab9T4nx0kL2lwwtmUZbXyMpKspJ11G4vea74ktdFCpci7Gx152Gu8K/B8XUQ9+kwOwztf0usmSF+ViMwXaevS7pfNY7knYdbc5fOHcUfFd97W0y9Rbn4X1+kouC7H4l6gLqoS4zEugB8Brc+0vHCuz1Wx/x0QAABRncn7SeIny57RnaSj8zRvyg3BH6dtZwdn0em1RWbMiglSefh4GTmN4JWUkvWDrbbIVIAH6iWIndh8ElOmLjV/XUWNifK0rxPysvtPYDEpSo56zKFVRdmsP03vrzniPaHiRxeKqVtg7d0dFAso9gJbviNij8qkgJAZma3Lui33I/gnn86fDjk+Tn8mu3hQjnp3wb4TRqGvXqIrujIqZgDkurEst9mO1/DxmurydZvP8FwbE1//Jw9V781Ryv/AHWt9ZYcD8NuI1d6SUx1qOo+iZjPeKjEKSozHkL2v6xMpvcW9bk/2md3R5VgfhC5scRigOq00J9nc/8A1kd2y+HH4HDtiKFYuiZc6OoDAMwXMrLodSLggac+U9mqVVQXZgo6kgD6yE49WpYvB4ijTdXL0qgXKcwzBLgZhpcG2kj5U6+coRg3imwUI4oBCEJHARwjlgoRwgKEIQMlNjpLLRcOgYfteVmSfCHJJTwuP3Ey8uezv9L4vLxasLjMtPLcDx0NgQPrzvJDhz/MUDYdevLnrylYo1ATfntryI/nOS2BZkqLqdL21H36b9fKctbSp/EYfLv6HcGaKnF/l6Og6A28bcpI4d86jNcjltNON4cjg21vvf1lZ6ad7PTjHFlJBAFrkaA+4ktwzi2uVUF+Rtv11kP/ALM13Fr22/eT3DMAqW68yd5dXt/alsTRzoBzOpkfUo3buagEZdOdtj7SdpqL+Nv4ZFY7GU8HQerU0VBfe+ZibKvmT94mbfSmtceYfEaqPxa0gdKVMA/6n77fQrKlOniGLavVerU1Z2LH1O3ptOeduc8nHPb0p6F8Isc1KrilVcxNEVAt7ZmpsbLflfOdZ59LN8Oq4TiVIE2Dh6Z8c6EAe4Eanoe1VnxjjufLTQ7qz2NtLG4vr/yiacNw3EFT+JxLOSbjIppqo6dwi+3PrJhFJQXOjWbxGx+4m+3K8w+X/Gclv2rLdlcG9R2qK9Rg3ezs5Vbi9lBNra+M2cFKlAVwwoZHACAfpYKpJBUWIzEG1wcuhMsJWaqq9wgDcG3nbSJq85U/GSvE+PfDrEYek1ak61QHbNTRWzImY5SP81huANPGUUkdZ9D4fD1xina6ikSCmt2OZQzDKNrMTvOgcNwyBw1GkFcsXGRDnLfmLaa38ZGfNZ9x1XxTksr5xinq/aT4aU6gNThzBW3NJ27hv/kc6r5G48p5nxLhtXC1DTxFNkcfpYbjqpGjDxBIm2d519MdZsckIQlkCOKOWBCEIBCEIAJ2cKfLVXxuPcTkmdBrOp6EH2MrudzYnN5ZUvxOm6d9PUfuPGGG4xcAcwd9j7b+0kKwDLK/jMFqcu84c3vqt95svYv3CuIh1AFr8rAgH1O87X4kDpovX2Omtuk8socQqUzbMdOXltM6nFXbcnnzJ1JuTLfFWb49FqcWFrDU2FtuvnvJfg2IZz3idQSuose8NPQcuk8l/wBpuSDc6bdff0HtJfhnEsSe8l7DntfzPOOSJ+Vr2LF8SCEIpzNb6X/Uek89+JdZz8pVJ+XYsw5F72v5Wvb1kpwpznGc5mP3/pOb4g0hakl9SjfRgR9ZON/yhrPM9rzeEboVNiLERTuYCTPAuH4gMmKp0XanSqK7Oo0/w2VmtzNgNbSGnqnw/wCMKcGKLboWHuSf3mXl1c57F/HmavK9KDqEuzBVBIuWyje418iI6uMpogdnQK1rNcZTfax2nPw4o9Ncyq1gpFwDY2KEi/8Ao+s1cb4NTxgVaucKhJsjZb3A0b2mWfbPXIlFdSLg3FgRbmCLiGcWJHL+fvOahSWmiol8qqFFyScqiwueekbVAJb4q3U/FN7RcbqYGsBkDI4OU35ocrC3/afWHBHr44F616dI6KBbO/iL6Kv3kpxpMPUdPxCg5HYpf8t2VbgjnqCfScvE+P0qC/mBPJQR6bTn3Oarv8Wu4nJ7TWH4WUA+VUOnJ9fqP6SsfFXhtSvg0KUC703DFkGZkTI2c9St8tx4A8pD4Xtu3zDdrLfY6W9ZbeFdqFqWV9zbKT+ry6yuNTN6bxqz37fP8JK9qaiPjsSyDKprVLAaDRiCbeJBPrCdvXGiY4QmgIRwkhRwhAI1a2sySkTvp/OkWJsBYfzeZb3OcTIn+H1w9MANcgWPWJ6felWpVmQ3RiD4SXwvGhoKi+q/e05Lmz6b53LOVu4hhFZb21Gx/r4SDKEHWWQV6dQHI4ueR0+hkPxBP8RvC0mX8RqT7hYCmHax8NOsvmDprToE20EonCwM92IAHM6CWPinaSn8oU6V2JHeOw8hfWRqW30nOpJ7WnhmLpUqZr1Wsq7dWboo5mU7jHG3xdc1DoNkX/Ko2H7+shq+KerbMe6NhyAjTSWzn4s97+Xr8d9amKvgeR/Y+E4a+Fanqw06jUTtp1JvRv3m2d2M0JLL2YxIogMTozH0sABf2nLUwiPqe63hYD2mj8G6IwBup16G/lHk1NZ408d+OuvZeznEw9HMG0WpUpki25IdfYMfaSLcQA0z5yb3NiL66AL5TzjsPi2/B4lNzTelVF+YLFHv6T0qu6OtJ1YKA6MAgFjYcvDeVxrkjHzXmuf2xas5ZVCtdrlQQRe2+rWEw+XUar8tmVCVzC5vcXtoBzkpiGV2RwpYrfKdRa4sfpNdem7VFdABl071rnXwvL61fj6+1Zmd9qp2gwvzExNFmBamiVEaxX8rEP8AQkSq8P4IuLqFKb6gDPUtZE8EQasx8SJ6ZU4PnqPVqPcvTenlAsoVrE/USp4WkmAoqCwvbM7dWO9j05DynNuW8tdvg1zNkbsD8NqKMGeu787BUUH3vJHHcAp4em9WkTnRGbvsLHKpO9u7tKnj+2mIpANTS6NcC+5ItqJ1YntA9fAYg1BlYUX56jMpWx5c5XMlq+vlJ7ryV3Zjcm5OpPUnUmEIT0HGI5mlBm2E6FwgH5j6CRd5hxyTNKLNsp/b3kglNV2UDxOv3mZN/wBUzvm/qJ44PkAfna3gNT/SZi3/AA7X8dTOl6WbmJy1MA/6WHvM7vV+6nhXYaNOTEzccNVGmp9QZjUpG3e0MqOGK0zYTEiShjMs56mKKBkLkzoRQJpQTop077wMg5O03UUtM0ozelPpJQzQToLTWtlHUzoRlHLXx/aSMUos2uw6n9p0IgXneamqEzA1JHOp6u3YCgqYwqQCtWm6FTqDazi4/wCk+89Rp4dE/KqjyAH2nhnB8U6OlSk1nQggnYW69QRpbxl/ftrWsAKNNW5kuxA/6QB7ZpSamfVa6xd8sXgrGBPKeK9r8YdFrql//TpqPq+YyDq8Qq1mHz69VxcXBqNa19bLfL9IvkhPDf17HxDi9CiCHdS1tEUhnbwVBqZ5JxTEkZVrEswNyCbqOmg3MnOL4qjgqKrRAzuLr1IP6mPOVLAYN8XULXvY3Jbmekz1r5NfHn4+0u2CqYummQqoSxCtoXY3uxPIC5tMe0mGOG4c451HSmT11zn6JaWLBqVQZ1ysNPCQHxAxqNg0S4zmsDYdFRrn/wByj1l/HP5RHk16rzmEcJ3OVvbEHlEK5moxGcnEuj58x+YZpBjjg2/MMYrGaYXkjd809YZ76GaQZleODXUognSavkHqJ0RgQOX8MZmuFnWqzIoB7j7wNCYUczN6qBtG6C/WNVtCG2mBNjNaa0my15IWeNXiyxiBsDTEmK8RMCR4PVysR4Xkq1Y2lcwz5XHt7y38FwCVQDUJPQcv7zLU9tvHr0gsU3MDX9pzFzynpNHs7hmB7h155jczD/wvhkcWRmI5Ekj+8zsreaiiYfh9bEso1OgGZr2VRtr+wl54JwsU0CroBuTuTzk0MESQSLKNgIY2uqrpbpEiLUfjquYhAZ5N2mxvzsS5H5FJVBysDqfU3PtPQ+JYj5dF3vqdF63bS/pqfSeccToW7w9Z0eHne1h5L+I6EUJ1MjjmF5mJypYx3gwigZQiAjAgMRxQhBzKEBAzQxuYgIPtA2udvKICZNsJiJI2IZsWaBNyOPCBsmJWZxQMIiJkRGBA1E2lt4NiO6rK2h3XpKo6TdwnEFHsSdPtKanpfF9vUsFxJQLEjSTOExKsLiUfDOji45zbQ4yKRytcW08Jm3i+PV0lb40STckKDzBFvW4mA4uGW418p00OHrVsxJ8RqQfrIqVK7RVMrJSB0UZm10zNt7D/AOUhai5hYzfxCrnqux5u1vK9gPQACcdVtNJtmcjm1e3qErrlYiE7a9PMbwm3yiqOvMlMxgsyG2KKOAxCJY4BMpjGIGQjBmMYMDYsHggg8DaDdREYqZ7vtASRpxDGYUzNlcd2aKZ1kDsVrc5l84zAbREwOqnUvNiGcdE6zpBkjayznV8tQe3vNvzdbWnNiN/WRSLhwnHquVPfy5SSxOEWpdlPLVSLgyk0ax7p52k9gMexA8Jjx0Ss6dMq9lTfezae3KXzs6SFF/6ysUBreSmCxbKRaRU96qfbfBjCYt7r3KhLo3KzE3XzBv8ASVuviBa+vsbe8n/iDxZ69fIwAFIALzJJsSSfbTwlcLZkF5tn6c+vtztidf7RTI0vEwlkP//Z"
              styles="rounded-full w-10 mt-1 mr-2"
            />
            <div>
              <h2 className="text-[16px] font-medium">Steve Jobbs</h2>
              <p className="text-sm text-gray-600">
                Head of Product Design at Apple
              </p>
              <span className="inline-block my-2.5 py-2 px-5 border border-gray-900 rounded-full font-medium">
                Connect
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[6%] w-full">
        <div className="pt-3.5 px-6 text-center">
          <p className="inline-block text-sm my-1 mx-2">About</p>
          <p className="inline-block text-sm my-1 mx-2">Accessibility</p>
          <p className="inline-block text-sm my-1 mx-2">Help Center</p>
          <p className="inline-block text-sm my-1 mx-2">Privacy Policy</p>
          <p className="inline-block text-sm my-1 mx-2">Advertising</p>
          <p className="inline-block text-sm my-1 mx-2">Ad Choices</p>
          <p className="inline-block text-sm my-1 mx-2">Business Services</p>
          <p className="inline-block text-sm my-1 mx-2">Get the LinkedIn App</p>
          <p className="inline-block text-sm my-1 mx-2">More</p>

          <div className="flex items-center justify-center mt-2 gap-1">
            <img src={logo} alt="linkedin logo" className="w-5 h-5" />
            <p className="text-sm font-semibold">
              LinkedIn &#169; 2024. All right reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
