"use client";

import { SkillType } from "@/services/skill/skill.type"
import { FC, useState } from "react";
import styles from "./SkillSelector.module.scss";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });

interface SkillSelectorProps {
    skills: SkillType[];
    onCancel: () => void;
    onAdd: (skillId: string | number) => Promise<SkillType>;
}

export const SkillSelector: FC<SkillSelectorProps> = ({skills, onCancel, onAdd}) => {
  const skillOptions = skills.map(skill => ({
    value: skill.id,
    label: skill.name,
  }));
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  const handleAdd = async() => {
    if(!selectedSkill) return;
    await onAdd(selectedSkill);
    onCancel();
  }

  const handleChange = (newValue: any) => {
    setSelectedSkill(newValue.value);
  }
    
  return (
    <div className={styles.container}>
        <Select 
            options={skillOptions}
            onChange={(newValue) => handleChange(newValue)}
            isSearchable={true}
        />
        <div className={styles.buttons}>
            <button onClick={handleAdd} className={styles.add}>Add</button>
            <button onClick={onCancel} className={styles.cancel}>Cancel</button>
        </div>
    </div>
  )
}