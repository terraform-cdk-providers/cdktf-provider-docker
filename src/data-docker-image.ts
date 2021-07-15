// https://www.terraform.io/docs/providers/docker/d/image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDockerImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Docker image, including any tags or SHA256 repo digests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/d/image.html#name DataDockerImage#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/d/image.html docker_image}
*/
export class DataDockerImage extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/docker/d/image.html docker_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDockerImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataDockerImageConfig) {
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // repo_digest - computed: true, optional: false, required: false
  public get repoDigest() {
    return this.getStringAttribute('repo_digest');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
