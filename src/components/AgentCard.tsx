interface AgentProps {
    image: string;
    name: string;
    role: string;
}

const AgentCard = ({ image, name, role }: AgentProps) => {
    return (
        <div className="agent-card">
            <div className="overflow-hidden mb-6 aspect-[3/4]">
                <img src={image} alt={name} className="agent-image" />
            </div>
            <h3 className="text-lg tracking-widest uppercase mb-1">{name}</h3>
            <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">{role}</p>
        </div>
    );
};

export default AgentCard;
