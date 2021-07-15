// https://www.terraform.io/docs/providers/docker/r/image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, then the image is removed forcibly when the resource is destroyed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#force_remove Image#force_remove}
  */
  readonly forceRemove?: boolean;
  /**
  * If true, then the Docker image won't be deleted on destroy operation. If this is false, it will delete the image from the docker local storage on destroy operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#keep_locally Image#keep_locally}
  */
  readonly keepLocally?: boolean;
  /**
  * The name of the Docker image, including any tags or SHA256 repo digests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#name Image#name}
  */
  readonly name: string;
  /**
  * A value which cause an image pull when changed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#pull_trigger Image#pull_trigger}
  */
  readonly pullTrigger?: string;
  /**
  * List of values which cause an image pull when changed. This is used to store the image digest from the registry when using the [docker_registry_image](../data-sources/registry_image.md).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#pull_triggers Image#pull_triggers}
  */
  readonly pullTriggers?: string[];
  /**
  * build block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#build Image#build}
  */
  readonly buildAttribute?: ImageBuild[];
}
export interface ImageBuild {
  /**
  * Set build-time variables
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#build_arg Image#build_arg}
  */
  readonly buildArg?: { [key: string]: string };
  /**
  * Name of the Dockerfile. Defaults to `Dockerfile`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#dockerfile Image#dockerfile}
  */
  readonly dockerfile?: string;
  /**
  * Always remove intermediate containers
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#force_remove Image#force_remove}
  */
  readonly forceRemove?: boolean;
  /**
  * Set metadata for an image
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#label Image#label}
  */
  readonly label?: { [key: string]: string };
  /**
  * Do not use cache when building the image
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#no_cache Image#no_cache}
  */
  readonly noCache?: boolean;
  /**
  * Context path
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#path Image#path}
  */
  readonly path: string;
  /**
  * Remove intermediate containers after a successful build. Defaults to  `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#remove Image#remove}
  */
  readonly remove?: boolean;
  /**
  * Name and optionally a tag in the 'name:tag' format
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#tag Image#tag}
  */
  readonly tag?: string[];
  /**
  * Set the target build stage to build
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#target Image#target}
  */
  readonly target?: string;
}

function imageBuildToTerraform(struct?: ImageBuild): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    build_arg: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.buildArg),
    dockerfile: cdktf.stringToTerraform(struct!.dockerfile),
    force_remove: cdktf.booleanToTerraform(struct!.forceRemove),
    label: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.label),
    no_cache: cdktf.booleanToTerraform(struct!.noCache),
    path: cdktf.stringToTerraform(struct!.path),
    remove: cdktf.booleanToTerraform(struct!.remove),
    tag: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tag),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/r/image.html docker_image}
*/
export class Image extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/docker/r/image.html docker_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageConfig
  */
  public constructor(scope: Construct, id: string, config: ImageConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_image',
      terraformGeneratorMetadata: {
        providerName: 'docker'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._forceRemove = config.forceRemove;
    this._keepLocally = config.keepLocally;
    this._name = config.name;
    this._pullTrigger = config.pullTrigger;
    this._pullTriggers = config.pullTriggers;
    this._build = config.buildAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force_remove - computed: false, optional: true, required: false
  private _forceRemove?: boolean;
  public get forceRemove() {
    return this.getBooleanAttribute('force_remove');
  }
  public set forceRemove(value: boolean ) {
    this._forceRemove = value;
  }
  public resetForceRemove() {
    this._forceRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRemoveInput() {
    return this._forceRemove
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_locally - computed: false, optional: true, required: false
  private _keepLocally?: boolean;
  public get keepLocally() {
    return this.getBooleanAttribute('keep_locally');
  }
  public set keepLocally(value: boolean ) {
    this._keepLocally = value;
  }
  public resetKeepLocally() {
    this._keepLocally = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepLocallyInput() {
    return this._keepLocally
  }

  // latest - computed: true, optional: false, required: false
  public get latest() {
    return this.getStringAttribute('latest');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // pull_trigger - computed: false, optional: true, required: false
  private _pullTrigger?: string;
  public get pullTrigger() {
    return this.getStringAttribute('pull_trigger');
  }
  public set pullTrigger(value: string ) {
    this._pullTrigger = value;
  }
  public resetPullTrigger() {
    this._pullTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullTriggerInput() {
    return this._pullTrigger
  }

  // pull_triggers - computed: false, optional: true, required: false
  private _pullTriggers?: string[];
  public get pullTriggers() {
    return this.getListAttribute('pull_triggers');
  }
  public set pullTriggers(value: string[] ) {
    this._pullTriggers = value;
  }
  public resetPullTriggers() {
    this._pullTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullTriggersInput() {
    return this._pullTriggers
  }

  // repo_digest - computed: true, optional: false, required: false
  public get repoDigest() {
    return this.getStringAttribute('repo_digest');
  }

  // build - computed: false, optional: true, required: false
  private _build?: ImageBuild[];
  public get buildAttribute() {
    return this.interpolationForAttribute('build') as any;
  }
  public set buildAttribute(value: ImageBuild[] ) {
    this._build = value;
  }
  public resetBuildAttribute() {
    this._build = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_remove: cdktf.booleanToTerraform(this._forceRemove),
      keep_locally: cdktf.booleanToTerraform(this._keepLocally),
      name: cdktf.stringToTerraform(this._name),
      pull_trigger: cdktf.stringToTerraform(this._pullTrigger),
      pull_triggers: cdktf.listMapper(cdktf.stringToTerraform)(this._pullTriggers),
      build: cdktf.listMapper(imageBuildToTerraform)(this._build),
    };
  }
}
