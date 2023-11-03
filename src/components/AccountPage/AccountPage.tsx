"use client";

import styles from "./AccountPage.module.scss";
import Image from "next/image";
import defaultAvatar from "@/assets/avatar.png";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { errorCatch } from "@/utils/errorCatch";
import { UserService } from "@/services/user/user.service";
import { FiMinusCircle } from 'react-icons/fi';
import { SkillService } from "@/services/skill/skill.service";
import { SkillSelector } from "../SkillSelector/SkillSelector";
import Link from "next/link";

interface IExpirience {
    id?: number;
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    current: boolean;
    location: string;
    description: string;
}
const defaultExperience = {
  title: "",
  company: "",
  startDate: "",
  endDate: "",
  current: false,
  location: "",
  description: ""
};

export const AccountPage = () => {
  const { data: session } = useSession();
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [name, setName] = useState<string | null>(null);
  const [age, setAge] = useState<number | null>(null);
  const [about, setAbout] = useState<string | null>(null);
  const [experience, setExperience] = useState<IExpirience[]>([]);
  const [isExperienceEditing, setIsExperienceEditing] = useState<IExpirience | null>(null);
  const [avatar, setAvatar] = useState<string | null>();
  const [skills, setSkills] = useState<any | null>(null);
  const [allSkills, setAllSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isSkillEditing, setIsSkillEditing] = useState(false);

    const addExperience = async () => {
        if (!isExperienceEditing) {
            return;
        }
        
        const updatedExperience = experience ? [...experience] : [];
        
        if (isExperienceEditing) {
            updatedExperience.push(isExperienceEditing);
        }

        setExperience(updatedExperience);
    };

    const removeExperience = (idToRemove: number) => {
        const updatedExperience = experience.filter((exp) => exp.id !== idToRemove);
        setExperience(updatedExperience);
      };

    useEffect(() => {
        if (isExperienceEditing !== null) {
            updateProfile();
        }
    }, [experience]);

    const updateProfile = async () => {
        try {
            setLoading(true);
            const data = {
                name,
                age,
                about,
                experience: experience?.length ? experience : null,
                skills,
                email: session?.user?.email,
            };
            const response = await UserService.update((session?.user as any)?.id, data as any);
        } catch (err) {
            console.log(errorCatch(err));
        } finally {
            setLoading(false);
            setIsUpdate(false);
        }
    };

    useEffect(() => {
        const fetchSkills = async() => {
            try {
                setLoading(true);
                const response = await SkillService.getAll();
                setAllSkills(response);
            } catch(err) {
                console.log(errorCatch(err));
            } finally {
                setLoading(false);
            }
        }

        fetchSkills();
    }, [])

  const addSkil = async(skillId: number | string) => {
    try {
        const response = await UserService.addSkill((session?.user as any)?.id, skillId);
        return response;
    }catch(err) {
        console.log(errorCatch(err));
    }
  }

  useEffect(() => {
    const getProfile = async () => {
        try {
            const response = await UserService.getOne((session?.user as any)?.id as string);
            setName(response.name || null);
            setAge(response.age || null);
            setAbout(response.about || null);
            console.log(response.skills);
            if (response.experience) {
                const mappedExperience = response.experience.map((exp) => ({
                    id: exp.id,
                    title: exp.title,
                    company: exp.company,
                    startDate: exp.startDate,
                    endDate: exp.endDate || "",
                    current: exp.current,
                    location: exp.location || "",
                    description: exp.description || "",
                }));
                setExperience(mappedExperience);
            } else {
                setExperience([]);
            }
            setSkills(response.skills || null);
            setAvatar(response.avatar || null);
        } catch (err) {
            console.log(errorCatch(err));
        }
    };

    getProfile();
        
    }, [isUpdate, session])
    
    if(loading) {
      return <h1>Loading...</h1>
    }

  return (
    <section>
        <div className={styles.main}>
            <Image src={avatar || defaultAvatar?.src} alt="Profile avatar" className={styles.avatar} width={100} height={100} style={{cursor: isUpdate ? "pointer" : "default"}}/>
            {isUpdate ?
                (<div className={styles["main-input"]}>
                    <input type="text" value={name || ""} placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
                    <input type="number" value={age || ""} placeholder="Enter your age" onChange={(e) => setAge(+e.target.value)}/>
                </div>) : (
                    <h1 className={styles.name}>{`${session?.user?.name ? session?.user.name : "No name"}, ${age || "No age"}`}</h1>
                )
            }
        </div>
        <p className={styles.email}><span className={styles.bold}>Email: </span>{session?.user?.email}</p>
        <br />
        <p className={styles.about}>{"About me:"}</p>
        {
            isUpdate ? 
            <textarea className={styles["about-input"]} onChange={(e) => setAbout(e.target.value)} placeholder="Tell us about yourself"  value={about || ""}/> :
            <p>{about || "Empty :("}</p>
        }
        <br />
        <div className={styles.experience}>
            <h2>Experience</h2>
            {!(experience && experience?.length) ? (
                <p>No experience</p>
            ) : (
                experience.map((exp: any) => 
                    <div className={styles["experience-list-container"]} key={exp.id}>
                        <div className={styles["experience-content"]}>
                            <h3>{exp.title}</h3>
                            <p>{`In ${exp.company}`}</p>
                            <p>{`From ${exp.startDate} to ${exp?.endDate ? exp.endDate : exp.current ? "now" : "-"}`}</p>
                            <p>{`Location: ${exp.location}`}</p>
                            <p>Description:</p>
                            <p>{exp?.description || "Empty :("}</p>
                        </div>
                        <button className={styles["remove-experience-btn"]} onClick={() => removeExperience(exp.id)}>
                            <FiMinusCircle />
                        </button>
                    </div>
                )
            )}
            <button className={styles["add-exp-btn"]} onClick={() => setIsExperienceEditing(defaultExperience)}>Add new</button>
            {isExperienceEditing && (
                <div className={styles["experience-container"]}>
                    <div className={styles["experience-content"]}>
                        <input type="text" placeholder="Enter title" value={isExperienceEditing.title} onChange={(e) => setIsExperienceEditing({...isExperienceEditing, title: e.target.value})}/>
                        <input type="text" placeholder="Enter company" value={isExperienceEditing.company} onChange={(e) => setIsExperienceEditing({...isExperienceEditing, company: e.target.value})}/>
                        <input type="date" placeholder="Enter start date" value={isExperienceEditing.startDate} onChange={(e) => setIsExperienceEditing({...isExperienceEditing, startDate: e.target.value})}/>
                        {!isExperienceEditing.current && (
                            <input type="date" placeholder="Enter end date" value={isExperienceEditing.endDate} onChange={(e) => setIsExperienceEditing({...isExperienceEditing, endDate: e.target.value})}/>
                        )}
                        <div className={styles.checkbox}>
                            <label htmlFor="current">Current job</label>
                            <input type="checkbox" id="current" onChange={() => setIsExperienceEditing({...isExperienceEditing, current: !isExperienceEditing.current})} checked={isExperienceEditing.current}/>
                        </div>
                        <input type="text" placeholder="Enter location" value={isExperienceEditing.location} onChange={(e) => setIsExperienceEditing({...isExperienceEditing, location: e.target.value})}/>
                        <textarea placeholder="Enter description"/>
                    </div>
                    <div className={styles["add-exp-btns-container"]}>
                        <button className={styles["add-exp-btn"]} onClick={addExperience}>Add</button>
                        <button className={styles["cancel-btn"]} onClick={() => setIsExperienceEditing(null)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
        <br />
        <div className={styles.skills}>
            <h2>Skills</h2>
            {!(skills && skills?.length) ? (
                <p>No skills</p>
            ) : (
                skills.map((skill: any) => 
                    <div className={styles["skill-container"]} key={skill.id}>
                        <Link href="/test/react">
                            <h3>{skill.skill.name}</h3>
                        </Link>
                        <p>{`Level: ${skill.rating}`}</p>
                    </div>
                )
            )}
            <button className={styles["add-skill-btn"]} onClick={() => setIsSkillEditing(true)}>Add new</button>
            {isSkillEditing &&
                <SkillSelector onCancel={() => setIsSkillEditing(false)} onAdd={addSkil} skills={allSkills}/>
            }
        </div>
        <div className={styles.options}>
            {!isUpdate && !loading ? 
               ( <>
                    <button className={styles["edit-profile-btn"]} onClick={() => setIsUpdate(true)}>Edit profile</button>
                    <button className={styles["logout-btn"]} onClick={() => signOut()}>Log out</button>
                </>) :
                (
                    <>
                        <button className={styles["save-changes-btn"]} onClick={updateProfile}>Save changes</button>
                        <button className={styles["cancel-btn"]} onClick={() => setIsUpdate(false)}>Cancel</button>
                    </>
                )
            }
        </div>

    </section>
  )
}